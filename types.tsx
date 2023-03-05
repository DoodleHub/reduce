import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootTabParamList = {
  Timer: undefined;
  Schedule: undefined;
  Messages: undefined;
  Account: undefined;
};

export type TimerStackParamList = {
  Root: undefined;
  EditTimer: undefined;
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
