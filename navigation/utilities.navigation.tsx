import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UtilitiesScreen } from '../screens/utilities/utilities.screen';
import { UtilitiesStackParamList } from '../types';

const UtilitiesStack = createStackNavigator<UtilitiesStackParamList>();

export const UtilitiesNavigation = () => (
  <UtilitiesStack.Navigator>
    <UtilitiesStack.Screen name="Root" component={UtilitiesScreen} />
  </UtilitiesStack.Navigator>
);
