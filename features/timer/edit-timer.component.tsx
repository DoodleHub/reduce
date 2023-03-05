import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import { PickerContainer, Wrapper } from './edit-timer.styles';
import { TimerStackRouteProp } from '../../types';
import { EditTimerPicker } from './edit-timer-picker';

export const EditTimer = () => {
  const { params } = useRoute<TimerStackRouteProp>();
  const [hour, setHour] = useState<unknown>(0);
  const [minute, setMinute] = useState<unknown>(0);
  const [second, setSecond] = useState<unknown>(0);
  const [name, setName] = useState(params?.timerName);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Wrapper>
        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName}
        />
        <PickerContainer>
          <EditTimerPicker
            duration={24}
            value={hour}
            setValue={setHour}
            type="hour"
          />
          <EditTimerPicker
            duration={60}
            value={minute}
            setValue={setMinute}
            type="min"
          />
          <EditTimerPicker
            duration={60}
            value={second}
            setValue={setSecond}
            type="sec"
          />
        </PickerContainer>
        <Button
          icon="checkbox-marked-circle-outline"
          mode="contained"
          onPress={() => {}}
        >
          Save
        </Button>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
