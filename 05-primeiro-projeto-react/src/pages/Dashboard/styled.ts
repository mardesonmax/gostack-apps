import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 100px;
  max-width: 433px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  height: 70px;
  display: flex;

  input {
    width: 100%;
    padding: 0 30px;
    color: #3a3a3a;
    border-radius: 5px 0px 0px 5px;

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

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }

  input,
  button {
    border: none;
  }
`;

export const Repository = styled.div`
  max-width: 700px;
  margin-top: 100px;

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
