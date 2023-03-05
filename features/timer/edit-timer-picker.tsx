import React from 'react';
import { Picker } from '@react-native-picker/picker';

import { StyledPicker } from './edit-timer.styles';
import { Text } from 'react-native-paper';

type EditTimerPickerProps = {
  duration: number;
  value: unknown;
  setValue: React.Dispatch<unknown>;
  type: string;
};

export const EditTimerPicker = ({
  duration,
  value,
  setValue,
  type,
}: EditTimerPickerProps) => (
  <>
    <StyledPicker selectedValue={value} onValueChange={setValue}>
      {[...Array(duration).keys()].map(index => (
        <Picker.Item key={index} label={`${index.toString()}`} value={index} />
      ))}
    </StyledPicker>
    <Text variant="labelLarge">{type}</Text>
  </>
);
