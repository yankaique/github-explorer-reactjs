import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo-github-explorer.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49956758?s=460&u=11861943fb68ef85c0900067bad0db69a11c7869&v=4"
            alt="Yan"
          />
          <div>
            <strong>o-matador-de-monstros</strong>
            <p>Game developed in Vue JS</p>
          </div>
          <FiChevronRight size={16} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49956758?s=460&u=11861943fb68ef85c0900067bad0db69a11c7869&v=4"
            alt="Yan"
          />
          <div>
            <strong>o-matador-de-monstros</strong>
            <p>Game developed in Vue JS</p>
          </div>
          <FiChevronRight size={16} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/49956758?s=460&u=11861943fb68ef85c0900067bad0db69a11c7869&v=4"
            alt="Yan"
          />
          <div>
            <strong>o-matador-de-monstros</strong>
            <p>Game developed in Vue JS</p>
          </div>
          <FiChevronRight size={16} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
