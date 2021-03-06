import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, Issue, RepositoryInfo } from './styled';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explore" />
        <Link to="/">
          <FaAngleLeft /> Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issue>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url} target=" _blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FaAngleRight />
          </a>
        ))}
      </Issue>
    </>
  );
};

export default Repository;
