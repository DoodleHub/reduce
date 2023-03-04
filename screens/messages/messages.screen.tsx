import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { SafeArea } from '../../components/safe-area.component';

export const MessagesScreen = () => (
  <SafeArea>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text variant="headlineMedium">Coming soon...</Text>
    </View>
  </SafeArea>
);
