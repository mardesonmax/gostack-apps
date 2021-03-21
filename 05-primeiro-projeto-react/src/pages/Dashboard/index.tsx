import React, { FormEvent, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Form, Title, Repository } from './styled';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${search}`);
    setSearch('');

    const repository = response.data;

    const repositoryExist = repositories.find(
      (repo) => repo.full_name === repository.full_name,
    );

    if (repositoryExist) return;

    setRepositories([...repositories, repository]);

    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
  };

  return (
    <>
      <img src={logo} alt="Github Explore" />
      <Title>Explore repositórios no github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="user/repository"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        {repositories.map((repository) => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FaAngleRight />
          </a>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
