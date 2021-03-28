import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
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
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    const userExits = await this.usersRepository.findByEmail(email);

    if (userExits) {
      throw new AppError('Email is already being used');
    }

    const passwordHash = await hash(password, 0);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    delete user.password;

    return user;
  }
}

export default CreateUserService;
