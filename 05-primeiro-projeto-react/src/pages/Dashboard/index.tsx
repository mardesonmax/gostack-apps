import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Form, Title, Repository } from './styled';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explore" />
    <Title>Explore repositórios no github</Title>

    <Form>
      <input type="text" placeholder="Repositório..." />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repository>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/45460698?s=460&u=7780ef7774a2733d46ee79c69ac01c48a1e1f2c3&v=4"
          alt="Mardeson Pereira"
        />

        <div>
          <strong>name/repository</strong>
          <p>description repository</p>
        </div>

        <FaAngleRight />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/45460698?s=460&u=7780ef7774a2733d46ee79c69ac01c48a1e1f2c3&v=4"
          alt="Mardeson Pereira"
        />

        <div>
          <strong>name/repository</strong>
          <p>description repository</p>
        </div>

        <FaAngleRight />
      </a>

      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/45460698?s=460&u=7780ef7774a2733d46ee79c69ac01c48a1e1f2c3&v=4"
          alt="Mardeson Pereira"
        />

        <div>
          <strong>name/repository</strong>
          <p>description repository</p>
        </div>

        <FaAngleRight />
      </a>
    </Repository>
  </>
);

export default Dashboard;
