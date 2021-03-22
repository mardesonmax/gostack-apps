import React from 'react';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

import { Background, Container, Content } from './styled';
import logoSvg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FaEnvelope} placeholder="E-mail" />
        <Input name="email" icon={FaLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
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
