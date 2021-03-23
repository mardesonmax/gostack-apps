import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 16px;
  background: #ff9000;
  border: 0;
  border-radius: 5px;
  color: #312e38;
  margin: 20px 0;
  transition: 0.2s ease all;
  font-weight: 500;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
    transform: scale(0.98);
  }
`;
