import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SessionController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      body: { email, password },
    } = request;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.status(201).json({ user, token });
  }
}

export default SessionController;
