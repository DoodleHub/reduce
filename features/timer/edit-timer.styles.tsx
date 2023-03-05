import styled from 'styled-components';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MD3Colors } from 'react-native-paper';

export const Wrapper = styled(View)`
  padding: 20px 15px;
  flex: 1;
  justify-content: space-between;
  background-color: ${MD3Colors.primary95};
`;

export const PickerContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledPicker = styled(Picker)`
  width: 25%;
`;
