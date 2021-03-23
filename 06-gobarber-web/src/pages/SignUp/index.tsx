import React from 'react';
import { FaEnvelope, FaLock, FaUser, FaArrowLeft } from 'react-icons/fa';
import { Form } from '@unform/web';

import { Background, Container, Content } from './styled';
import logoSvg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface SingUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const handleSubmit = (data: SingUpFormData): void => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSvg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="name" icon={FaUser} placeholder="Nome" />
          <Input name="email" icon={FaEnvelope} placeholder="E-mail" />
          <Input
            name="password"
            icon={FaLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="register">
          <FaArrowLeft /> Fazer login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
