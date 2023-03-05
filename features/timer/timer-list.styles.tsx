import styled from 'styled-components';
import { ScrollView, View } from 'react-native';
import { FAB } from 'react-native-paper';

export const StyledScrollView = styled(ScrollView).attrs({
  contentContainerStyle: { flex: 1 },
})``;

export const Wrapper = styled(View)`
  flex: 1;
  gap: 15px;
  padding: 10px;
  align-items: center;
`;

export const StyledFAB = styled(FAB)`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
