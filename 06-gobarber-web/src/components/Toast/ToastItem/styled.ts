import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #c5fff1;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 350px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;

  background: #ebf8ff;
  color: #3172b7;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 10px;
    font-size: 20px;
  }

  div {
    flex: 1;
    p {
      font-size: 14px;
      opacity: 0.8;
      margin-top: 4px;
    }
  }

  button {
    font-size: 18px;
    display: flex;
    padding: 0;
    background: none;
    border: 0;
    color: inherit;
    margin-left: 10px;
    transition: 0.2s ease all;

    &:hover {
      transform: rotate(90deg) scale(1.1);
    }
  }
`;
