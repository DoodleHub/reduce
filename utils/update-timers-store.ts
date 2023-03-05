import AsyncStorage from '@react-native-async-storage/async-storage';

import { Timer } from '../types';

const initTimers = async () => {
  const timersString = await AsyncStorage.getItem('@timers');
  const timers = timersString !== null ? JSON.parse(timersString) : [];

  return timers;
}

export const addTimer = async (name: string, duration: number ) => {
  const timers: Timer[] = await initTimers();
  const maxId = timers.reduce((acc: number, curr: Timer) => {
    if (curr.id > acc) {
      return curr.id
    }

    return acc;
  }, 0);
  const item = {
    id: maxId + 1,
    name,
    duration
  };

  return AsyncStorage.setItem('@timers', JSON.stringify([...timers, item]));
}

export const updateTimer = async (id: number, name: string, duration: number) => {
  const timers: Timer[] = await initTimers();
  const updatedTimers = timers.reduce((acc: Timer[], curr: Timer) => {
    if (curr.id === id) {
      const item = {
        id,
        name,
        duration
      }

      return [...acc, item];
    }

    return [...acc, curr];
  }, []);

  return await AsyncStorage.setItem('@timers', JSON.stringify(updatedTimers));
}

export const removeTimer = async (id: number) => {
  const timers: Timer[] = await initTimers();
  const updatedTimers = timers.reduce((acc: Timer[], curr: Timer) => {
    if (curr.id === id) {
      return acc;
    }

    return [...acc, curr];
  }, []);

  return await AsyncStorage.setItem('@timers', JSON.stringify(updatedTimers));
}