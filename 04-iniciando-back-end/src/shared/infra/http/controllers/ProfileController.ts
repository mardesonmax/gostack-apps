import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import { classToClass } from 'class-transformer';
import ShowProfileService from '@modules/users/services/ShowProfileService';

class ProfileController {
  async show(request: Request, response: Response): Promise<Response> {
    const {
      user: { id: user_id },
    } = request;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({
      user_id,
    });

    return response.json(classToClass(user));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, email, password, old_password },
      user: { id: user_id },
    } = request;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(classToClass(user));
  }
}

export default ProfileController;
