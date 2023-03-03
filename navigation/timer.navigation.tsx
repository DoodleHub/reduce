import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TimerScreen } from '../screens/timer/timer.screen';
import { TimerStackParamList } from '../types';

const TimerStack = createStackNavigator<TimerStackParamList>();

export const TimerNavigation = () => (
  <TimerStack.Navigator screenOptions={{ headerShown: false }}>
    <TimerStack.Screen name="Root" component={TimerScreen} />
  </TimerStack.Navigator>
);
