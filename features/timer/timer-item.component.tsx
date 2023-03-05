import React, { useContext, useEffect, useRef, useState } from 'react';
import { Text, SegmentedButtons, MD3Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatDuration, intervalToDuration } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderContainer,
  HeaderIconContainer,
  ProgressBarContainer,
  ProgressText,
  StyledProgressBar,
} from './timer-item.styles';
import { TimerStackNavProp } from '../../types';
import { TimerContext } from '../../services/timer/timer.context';

type TimerItemProps = {
  id: number;
  name: string;
  duration: number;
};

export const TimerItem = ({ id, name, duration }: TimerItemProps) => {
  const { removeTimer } = useContext(TimerContext);
  const navigation = useNavigation<TimerStackNavProp>();
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(duration);
  const interval = useRef<ReturnType<typeof setInterval>>();
  const formattedTime = formatDuration(
    intervalToDuration({ start: 0, end: time })
  );

  useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(() => {
        setTime((time: number) => {
          const nextDuration = time - 1000;

          if (nextDuration === 0) {
            clearInterval(interval.current);
          }

          return time - 1000;
        });
      }, 1000);

      return () => clearInterval(interval.current);
    } else {
      clearInterval(interval.current);
    }
  }, [isPaused]);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  const handleButtonPress = (action: string) => {
    switch (action) {
      case 'start':
        setIsPaused(false);
        break;
      case 'pause':
        setIsPaused(true);
        break;
      case 'reset':
        setIsPaused(true);
        setTime(duration);
        break;
    }
  };

  const displayTime = () => (time === 0 ? 'Done!' : formattedTime);

  return (
    <Container>
      <HeaderContainer>
        <Text variant="headlineSmall">{name}</Text>
        <HeaderIconContainer>
          <MaterialCommunityIcons
            name="clock-edit-outline"
            size={24}
            onPress={() =>
              navigation.navigate('EditTimer', {
                id,
                timerName: name,
                duration,
              })
            }
          />
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color={MD3Colors.error50}
            onPress={() => removeTimer(id)}
          />
        </HeaderIconContainer>
      </HeaderContainer>
      <ProgressBarContainer>
        <StyledProgressBar
          progress={time / duration}
          color={MD3Colors.primary50}
        />
      </ProgressBarContainer>
      <ProgressText variant="labelLarge">{displayTime()}</ProgressText>
      <SegmentedButtons
        value=""
        onValueChange={handleButtonPress}
        buttons={[
          {
            value: 'start',
            label: 'Start',
          },
          {
            value: 'pause',
            label: 'Pause',
          },

          { value: 'reset', label: 'Reset' },
        ]}
      />
    </Container>
  );
};
