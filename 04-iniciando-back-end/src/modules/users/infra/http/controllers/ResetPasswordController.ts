import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPassword from '@modules/users/services/ResetPasswordService';

class ResetPasswordController {
  async create(request: Request, response: Response): Promise<Response> {
    const { password, token } = request.body;

    const resetPassword = container.resolve(ResetPassword);

    const user = await resetPassword.execute({
      password,
      token,
    });

    return response.json(user);
  }
}

export default ResetPasswordController;
