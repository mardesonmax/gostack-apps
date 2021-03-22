import React from 'react';
import { FaEnvelope, FaLock, FaUser, FaArrowLeft } from 'react-icons/fa';

import { Background, Container, Content } from './styled';
import logoSvg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoSvg} alt="GoBarber" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="name" icon={FaUser} placeholder="Nome" />
        <Input name="email" icon={FaEnvelope} placeholder="E-mail" />
        <Input name="email" icon={FaLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
      </form>
      <a href="register">
        <FaArrowLeft /> Fazer login
      </a>
    </Content>
  </Container>
);

export default SignUp;
