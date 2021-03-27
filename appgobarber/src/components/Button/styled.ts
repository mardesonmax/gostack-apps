import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  max-width: 360px;
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
`;
