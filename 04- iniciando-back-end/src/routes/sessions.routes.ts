import { Router } from 'express';
import AuthenticateUserService from '../services/ AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const {
      body: { email, password },
    } = request;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(201).json({ user, token });
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export default sessionsRouter;
