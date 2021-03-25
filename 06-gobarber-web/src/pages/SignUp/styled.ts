import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
`;

const animeLeft = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  max-width: 600px;
  animation: ${animeLeft} 1s;

  img {
    width: 200px;
  }

  form {
    margin: 60px 0;
    max-width: 360px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #f4ede8;
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
    color: #f4ede8;
    transition: 0.2s ease all;
    text-decoration: none;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

const animeOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
  animation: ${animeOpacity} 1s;
`;
