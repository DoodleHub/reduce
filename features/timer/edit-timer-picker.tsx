import React from 'react';
import { Picker } from '@react-native-picker/picker';

import { Container } from './edit-timer-picker.styles';
import { Text } from 'react-native-paper';

type EditTimerPickerProps = {
  max: number;
  value: number;
  setValue: React.Dispatch<number>;
  type: string;
};

export const EditTimerPicker = ({
  max,
  value,
  setValue,
  type,
}: EditTimerPickerProps) => (
  <>
    <Container>
      <Picker selectedValue={value} onValueChange={setValue}>
        {[...Array(max).keys()]
          .filter(index => !(type === 'sec' && index === 0))
          .map(index => (
            <Picker.Item
              key={index}
              label={`${index.toString()}`}
              value={index}
            />
          ))}
      </Picker>
    </Container>
    <Text variant="labelLarge">{type}</Text>
  </>
);
