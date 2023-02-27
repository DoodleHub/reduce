import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UtilitiesNavigation } from './utilities.navigation';
import { ScheduleNavigation } from './schedule.navigation';
import { MessagesNavigation } from './messages.navigation';
import { AccountNavigation } from './account.navigation';
import { RootTabParamList } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigation = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Utilities" component={UtilitiesNavigation} />
    <Tab.Screen name="Schedule" component={ScheduleNavigation} />
    <Tab.Screen name="Messages" component={MessagesNavigation} />
    <Tab.Screen name="Account" component={AccountNavigation} />
  </Tab.Navigator>
);
