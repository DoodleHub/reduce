import React, { useContext, useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

import { PickerContainer, Wrapper } from './edit-timer.styles';
import { TimerStackNavProp, TimerStackRouteProp } from '../../types';
import { EditTimerPicker } from './edit-timer-picker';
import { TimerContext } from '../../services/timer/timer.context';

export const EditTimer = () => {
  const { addTimer, updateTimer } = useContext(TimerContext);
  const navigation = useNavigation<TimerStackNavProp>();
  const { params } = useRoute<TimerStackRouteProp>();
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(1);
  const [name, setName] = useState(params?.timerName || 'Timer');
  const [duration, setDuration] = useState(params?.duration || 1000);

  useEffect(() => {
    setDuration((hour * 60 * 60 + minute * 60 + second) * 1000);
  }, [hour, minute, second]);

  useEffect(() => {
    setHour(Math.floor(duration / 1000 / 60 / 60));
    setMinute(Math.floor(((duration / 1000) % 60) / 60));
    setSecond(Math.floor(((duration / 1000) % 60) % 60));
  }, []);

  const handleSave = () => {
    if (params?.create) {
      addTimer(name, duration);
    } else if (params?.id) {
      updateTimer(params.id, name, duration);
    }

    navigation.navigate('Root');
  };

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
            max={24}
            value={hour}
            setValue={setHour}
            type="hour"
          />
          <EditTimerPicker
            max={60}
            value={minute}
            setValue={setMinute}
            type="min"
          />
          <EditTimerPicker
            max={60}
            value={second}
            setValue={setSecond}
            type="sec"
          />
        </PickerContainer>
        <Button
          icon="checkbox-marked-circle-outline"
          mode="contained"
          onPress={handleSave}
        >
          Save
        </Button>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};
