import React from 'react';

import { TimerItem } from './timer-item.component';

import { StyledFAB, StyledScrollView, Wrapper } from './timer-list.styles';

export const TimerList = () => {
  const timers = [
    { id: 1, name: 'Salmon', duration: 100000 },
    { id: 2, name: 'Steak', duration: 50000 },
    { id: 3, name: 'Chicken', duration: 1000000 },
  ];

  return (
    <StyledScrollView>
      <Wrapper>
        {timers.map(timer => (
          <TimerItem
            key={timer.id}
            id={timer.id}
            name={timer.name}
            duration={timer.duration}
          />
        ))}
      </Wrapper>
      <StyledFAB
        icon="plus"
        variant="surface"
        size="medium"
        onPress={() => {}}
      />
    </StyledScrollView>
  );
};
