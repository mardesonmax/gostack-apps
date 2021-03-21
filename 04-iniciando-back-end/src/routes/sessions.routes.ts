import { Router } from 'express';
import AuthenticateUserService from '../services/ AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const {
    body: { email, password },
  } = request;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  return response.status(201).json({ user, token });
});

export default sessionsRouter;
