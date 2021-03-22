import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';

import { Background, Container, Content } from './styled';
import logoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="register">
        <FaSignInAlt /> Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
