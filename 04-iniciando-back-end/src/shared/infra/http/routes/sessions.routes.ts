import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();
sessionsRouter.post('/', async (request, response) => {
  const {
    body: { email, password },
  } = request;

  const authenticateUser = container.resolve(AuthenticateUserService);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  return response.status(201).json({ user, token });
});

export default sessionsRouter;
