import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    text-decoration: none;
    transition: 0.2s ease all;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: #777;
    }
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;
    margin-top: 40px;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    div {
      margin-left: 25px;

      strong {
        font-size: 35px;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        margin-top: 5px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 30px;
      }

      strong {
        font-size: 35px;
        color: #3d3d4d;
      }

      p {
        font-size: 20px;
        margin-top: 5px;
        color: #737380;
      }
    }
  }
`;

export const Issue = styled.div`
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
