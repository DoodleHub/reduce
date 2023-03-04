import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

import { SafeArea } from '../../components/safe-area.component';

export const ScheduleScreen = () => (
  <SafeArea>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Coming soon...</Text>
    </View>
  </SafeArea>
);
