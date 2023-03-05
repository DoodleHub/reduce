import styled from 'styled-components';
import { ScrollView, View } from 'react-native';
import { FAB } from 'react-native-paper';

export const StyledScrollView = styled(ScrollView).attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Wrapper = styled(View)`
  flex: 1;
  gap: 15px;
  padding: 10px;
  margin-bottom: 65px;
  align-items: center;
`;

export const StyledFAB = styled(FAB)`
  position: absolute;
  background-color: white;
  right: 10px;
  bottom: 10px;
`;
