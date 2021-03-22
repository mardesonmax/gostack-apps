import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: #232129;
  border: 2px solid #232129;
  border-radius: 5px;
  color: #666360;

  input {
    background: transparent;
    border: none;
    color: #f4ede8;
  }

  & + label {
    margin-top: 8px;
  }

  &::placeholder {
    color: #666360;
  }

  svg {
    margin-right: 10px;
  }
`;
