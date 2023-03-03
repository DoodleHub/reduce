import React, { useEffect, useRef, useState } from 'react';
import {
  useTheme,
  Text,
  SegmentedButtons,
  MD3Colors,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatDuration, intervalToDuration } from 'date-fns';

import {
  Container,
  HeaderContainer,
  ProgressBarContainer,
  ProgressText,
  StyledProgressBar,
} from './timer-item.styles';

type TimerItemProps = {
  name: string;
  duration: number;
};

export const TimerItem = ({ name, duration }: TimerItemProps) => {
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(duration);
  const interval = useRef<ReturnType<typeof setInterval>>();
  const displayTime = formatDuration(
    intervalToDuration({ start: 0, end: time })
  );

  useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(() => {
        setTime((time: number) => time - 1000);
      }, 1000);

      return () => clearInterval(interval.current);
    } else {
      clearInterval(interval.current);
    }
  }, [isPaused]);

  const handleButtonPress = (action: string) => {
    switch (action) {
      case 'start':
        setIsPaused(false);
        break;
      case 'pause':
        setIsPaused(true);
        break;
      case 'reset':
        setTime(duration);
        break;
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <Text variant="headlineSmall">{name}</Text>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={20}
          onPress={() => {}}
        />
      </HeaderContainer>
      <ProgressBarContainer>
        <StyledProgressBar
          progress={time / duration}
          color={MD3Colors.primary50}
        />
      </ProgressBarContainer>
      <ProgressText variant="labelLarge">{displayTime}</ProgressText>
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
