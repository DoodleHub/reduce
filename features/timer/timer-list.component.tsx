import React from 'react';
import { ScrollView } from 'react-native';
import { TimerItem } from './timer-item.component';
import { Wrapper } from './timer-list.styles';

export const TimerList = () => {
  const timers = [
    { id: 1, name: 'Salmon', duration: 100000 },
    { id: 2, name: 'Steak', duration: 50000 },
    { id: 3, name: 'Chicken', duration: 1000000 },
  ];

  return (
    <ScrollView>
      <Wrapper>
        {timers.map(timer => (
          <TimerItem
            key={timer.id}
            name={timer.name}
            duration={timer.duration}
          />
        ))}
      </Wrapper>
    </ScrollView>
  );
};
