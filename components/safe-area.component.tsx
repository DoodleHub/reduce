import { StatusBar, SafeAreaView } from 'react-native';
import { MD3Colors } from 'react-native-paper';
import styled from 'styled-components';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${MD3Colors.primary95};
`;
