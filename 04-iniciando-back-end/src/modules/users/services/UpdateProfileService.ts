import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../provider/HashProvider/models/IHashProvider';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticate users can change profile', 401);
    }

    if (email !== user.email) {
      const findUserEmail = await this.usersRepository.findByEmail(email);

      if (findUserEmail && user.id !== findUserEmail.id) {
        throw new AppError('Email is already in use ');
      }
    }

    if (password && !old_password) {
      throw new AppError('Enter the old password to continue');
    }

    if (password && old_password) {
      const verifyOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password
      );

      if (!verifyOldPassword) {
        throw new AppError('Old password invalid');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.name = name;
    user.email = email;

    await this.usersRepository.save(user);

    return classToClass(user);
  }
}

export default UpdateProfileService;
