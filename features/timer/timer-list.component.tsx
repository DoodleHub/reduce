import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { TimerContext } from '../../services/timer/timer.context';

import { TimerItem } from './timer-item.component';
import { TimerStackNavProp } from '../../types';

import { StyledFAB, StyledScrollView, Wrapper } from './timer-list.styles';

export const TimerList = () => {
  const { timers } = useContext(TimerContext);
  const navigation = useNavigation<TimerStackNavProp>();

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
        onPress={() => navigation.navigate('EditTimer', { create: true })}
      />
    </StyledScrollView>
  );
};
