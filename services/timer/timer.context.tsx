import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Timer } from '../../types';

type TimerContextValues = {
  timers: Timer[];
  getTimer: (id: number) => void;
  addTimer: (name: string, duration: number) => void;
  updateTimer: (id: number, name: string, duration: number) => void;
  removeTimer: (id: number) => void;
};

export const TimerContext = createContext<TimerContextValues>({
  timers: [],
  getTimer: (id: number) => {},
  addTimer: (name: string, duration: number) => {},
  updateTimer: (id: number, name: string, duration: number) => {},
  removeTimer: (id: number) => {},
});

type TimerContextProviderProps = {
  children: React.ReactNode;
};

export const TimerContextProvider = ({
  children,
}: TimerContextProviderProps) => {
  const [timers, setTimers] = useState<Timer[]>([]);

  useEffect(() => {
    const fetchTimers = async () => {
      AsyncStorage.clear();
      const timersString = await AsyncStorage.getItem('@timers');
      const timers =
        timersString !== null ? await JSON.parse(timersString) : [];

      setTimers(timers);
    };

    fetchTimers();
  }, []);

  const getTimer = (id: number) => timers.filter(timer => timer.id === id);

  const addTimer = async (name: string, duration: number) => {
    const maxId = timers.reduce((acc: number, curr: Timer) => {
      if (curr.id > acc) {
        return curr.id;
      }

      return acc;
    }, 0);
    const item = {
      id: maxId + 1,
      name,
      duration,
    };

    const updatedTimers = [...timers, item];
    setTimers(updatedTimers);
    await AsyncStorage.setItem('@timers', JSON.stringify(updatedTimers));
  };

  const updateTimer = async (id: number, name: string, duration: number) => {
    const updatedTimers = timers.reduce((acc: Timer[], curr: Timer) => {
      if (curr.id === id) {
        const item = {
          id,
          name,
          duration,
        };

        return [...acc, item];
      }

      return [...acc, curr];
    }, []);

    setTimers(updatedTimers);
    await AsyncStorage.setItem('@timers', JSON.stringify(updatedTimers));
  };

  const removeTimer = async (id: number) => {
    const updatedTimers = timers.reduce((acc: Timer[], curr: Timer) => {
      if (curr.id === id) {
        return acc;
      }

      return [...acc, curr];
    }, []);

    setTimers(updatedTimers);
    await AsyncStorage.setItem('@timers', JSON.stringify(updatedTimers));
  };

  return (
    <TimerContext.Provider
      value={{ timers, getTimer, addTimer, updateTimer, removeTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};
