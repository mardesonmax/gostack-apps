import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import IHashProvider from '../provider/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    const userExits = await this.usersRepository.findByEmail(email);

    if (userExits) {
      throw new AppError('Email is already being used');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export default CreateUserService;
