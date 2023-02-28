import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TimerScreen } from '../screens/timer/timer.screen';
import { UtilitiesStackParamList } from '../types';

const UtilitiesStack = createStackNavigator<UtilitiesStackParamList>();

export const TimerNavigation = () => (
  <UtilitiesStack.Navigator screenOptions={{ headerShown: false }}>
    <UtilitiesStack.Screen name="Root" component={TimerScreen} />
  </UtilitiesStack.Navigator>
);
