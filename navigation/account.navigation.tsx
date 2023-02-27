import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens/account/account.screen';

const AccountStack = createStackNavigator();

export const AccountNavigation = () => (
  <AccountStack.Navigator screenOptions={{ headerShown: false }}>
    <AccountStack.Screen name="Root" component={AccountScreen} />
  </AccountStack.Navigator>
);
