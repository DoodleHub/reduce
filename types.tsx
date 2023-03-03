import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Timer: undefined;
  Schedule: undefined;
  Messages: undefined;
  Account: undefined;
};

export type TimerStackParamList = {
  Root: undefined;
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
