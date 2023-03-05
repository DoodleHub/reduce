import React from 'react';
import { Text } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

import { Wrapper } from './edit-timer.styles';
import { TimerStackRouteProp } from '../../types';

export const EditTimer = () => {
  const { params } = useRoute<TimerStackRouteProp>();

  return (
    <Wrapper>
      <Text variant="titleLarge">{params?.timerName}</Text>
    </Wrapper>
  );
};
