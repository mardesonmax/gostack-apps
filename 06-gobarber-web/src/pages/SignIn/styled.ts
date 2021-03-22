import styled from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 10px;
  max-width: 700px;

  img {
    margin-top: 20px;
  }

  form {
    margin: 80px 0;
    max-width: 360px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      background: #232129;
      border: 2px solid #232129;
      border-radius: 5px;
      color: #f4ede8;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
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
      }
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      transition: 0.2s ease all;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: #ff9000;
    transition: 0.2s ease all;
    text-decoration: none;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
