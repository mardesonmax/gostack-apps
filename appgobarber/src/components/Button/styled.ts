import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  max-width: 360px;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
`;
