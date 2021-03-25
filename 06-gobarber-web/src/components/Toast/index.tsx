import React from 'react';
import { useTransition } from 'react-spring';

import ToastItem from './ToastItem';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styled';

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const transitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  } as React.CSSProperties);

  return (
    <Container>
      {transitions((style, item) => (
        <ToastItem key={item.id} style={style} message={item} />
      ))}
    </Container>
  );
};

export default Toast;
