import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, Issue, RepositoryInfo } from './styled';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explore" />
        <Link to="/">
          <FaAngleLeft /> Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/45460698?v=4"
            alt="nome usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>repository description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <p>Stars</p>
          </li>

          <li>
            <strong>48</strong>
            <p>Forks</p>
          </li>

          <li>
            <strong>67</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issue>
        <Link to="teste">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FaAngleRight />
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
