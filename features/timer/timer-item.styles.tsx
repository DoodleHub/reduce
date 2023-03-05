import { View } from 'react-native';
import { ProgressBar, Text, MD3Colors } from 'react-native-paper';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(View)`
  width: 100%;
  border: 1px solid ${MD3Colors.primary50};
  border-radius: 3px;
  padding: 5px 10px 10px 10px;
  background-color: white;
`;

export const HeaderContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderIconContainer = styled(View)`
  flex-direction: row;
  gap: 10px;
`;

export const ProgressBarContainer = styled(View)`
  position: relative;
`;

export const StyledProgressBar = styled(ProgressBar)`
  height: 30px;
  border-radius: 3px;
`;

export const ProgressText = styled(Text)`
  align-self: flex-end;
  margin-bottom: 15px;
`;
