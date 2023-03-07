import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

import { TimerNavigation } from './timer.navigation';
import { ScheduleNavigation } from './schedule.navigation';
import { MessagesNavigation } from './messages.navigation';
import { AccountNavigation } from './account.navigation';
import { RootTabParamList, RootTabScreenProps } from '../types';
import { TimerContextProvider } from '../services/timer/timer.context';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_ICON = {
  Timer: 'tools',
  Schedule: 'calendar-month-outline',
  Messages: 'message-text-outline',
  Account: 'account-outline',
};

const createScreenOptions = ({ route }: RootTabScreenProps) => {
  const iconName = TAB_ICON[route.name];
  const theme = useTheme();

  return {
    headerShown: false,
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <MaterialCommunityIcons
        name={
          iconName as React.ComponentProps<
            typeof MaterialCommunityIcons
          >['name']
        }
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: theme.colors.primary,
    tabBarInactiveTinyColor: theme.colors.secondary,
    tabBarActiveBackgroundColor: theme.colors.surfaceVariant,
  };
};

export const AppNavigation = () => (
  <TimerContextProvider>
    <TimerNavigation />
    {/* <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Timer" component={TimerNavigation} />
      <Tab.Screen name="Schedule" component={ScheduleNavigation} />
      <Tab.Screen name="Messages" component={MessagesNavigation} />
      <Tab.Screen name="Account" component={AccountNavigation} />
    </Tab.Navigator> */}
  </TimerContextProvider>
);
