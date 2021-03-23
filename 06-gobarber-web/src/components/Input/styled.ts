import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.label<ContainerProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: #232129;
  border-radius: 5px;
  transition: 0.2s ease all;

  border: 2px solid #232129;
  color: #666360;

  input {
    flex: 1;
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

  > svg {
    margin-right: 10px;
  }

  // Effects
  ${(props) =>
    props.isError &&
    css`
      border-color: #f53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #fc9000;
      color: #fc9000;

      svg {
        transform: scale(1.1);
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #fc9000;
    `}
`;

export const Error = styled(Tooltip)`
  height: 18px;
  margin-left: 10px;

  span {
    background-color: #f53030;
    color: #f4ede8;

    &::before {
      border-color: #f53030 transparent;
    }
  }
`;
