import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MessagesScreen } from '../screens/messages/messages.screen';

const MessagesStack = createStackNavigator();

export const MessagesNavigation = () => (
  <MessagesStack.Navigator screenOptions={{ headerShown: false }}>
    <MessagesStack.Screen name="Root" component={MessagesScreen} />
  </MessagesStack.Navigator>
);
