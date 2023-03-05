import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootTabParamList = {
  Timer: undefined;
  Schedule: undefined;
  Messages: undefined;
  Account: undefined;
};

export type TimerStackParamList = {
  Root: undefined;
  EditTimer: {
    id?: number;
    timerName?: string;
    create?: boolean;
    duration?: number;
  };
};

export type ScheduleStackParamList = {
  Root: undefined;
};

export type MessagesStackParamList = {
  Root: undefined;
};

export type AccountStackParamList = {
  Root: undefined;
};

export type RootTabScreenProps = BottomTabScreenProps<RootTabParamList>;

export type TimerStackNavProp = StackNavigationProp<TimerStackParamList>;

export type TimerStackRouteProp = RouteProp<TimerStackParamList>;

export type Timer = {
  id: number;
  name: string;
  duration: number;
};
