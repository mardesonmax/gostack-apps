import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormError {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 40px;
  max-width: 433px;
`;

export const Form = styled.form<FormError>`
  margin-top: 40px;
  max-width: 700px;
  height: 70px;
  display: flex;

  input {
    width: 100%;
    padding: 0 30px;
    color: #3a3a3a;
    border-radius: 5px 0px 0px 5px;
    border: 2px solid #fff;
    border-right: none;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #04d361;
    color: #fff;
    font-size: 18px;
    padding: 0 30px;
    border-radius: 0px 5px 5px 0px;
    transition: background-color 0.2s;
    border: none;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 10px;
`;

export const Repository = styled.div`
  max-width: 700px;
  margin-top: 40px;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    transition: 0.2s ease all;

    &:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      transform: translateX(10px);

      svg {
        color: #04d361;
      }
    }

    & + a {
      margin-top: 15px;
    }

    img {
      width: 65px;
      height: 65px;
      border-radius: 50%;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    }

    div {
      flex: 1;
      padding: 0 15px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        margin-top: 4px;
        font-size: 16px;
        color: #a8a8b3;
      }
    }

    svg {
      color: #c9c9d4;
      transition: color 0.2s;
    }
  }
`;
