import React from 'react';

import { SafeArea } from '../../components/safe-area.component';
import { TimerList } from '../../features/timer/timer-list.component';

export const TimerScreen = () => (
  <SafeArea>
    <TimerList />
  </SafeArea>
);
