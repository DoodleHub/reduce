import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScheduleScreen } from '../screens/schedule/schedule.screen';

const ScheduleStack = createStackNavigator();

export const ScheduleNavigation = () => (
  <ScheduleStack.Navigator screenOptions={{ headerShown: false }}>
    <ScheduleStack.Screen name="Root" component={ScheduleScreen} />
  </ScheduleStack.Navigator>
);
