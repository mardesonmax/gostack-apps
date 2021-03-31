import auth from '@config/auth';
import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { classToClass } from 'class-transformer';

import User from '../infra/typeorm/entities/User';
import IHashProvider from '../provider/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email and password combination', 401);
    }

    const passwordVerify = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordVerify) {
      throw new AppError('Incorrect email and password combination', 401);
    }

    const { secret, expiresIn } = auth.jtw;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user: classToClass(user),
      token,
    };
  }
}
export default AuthenticateUserService;
