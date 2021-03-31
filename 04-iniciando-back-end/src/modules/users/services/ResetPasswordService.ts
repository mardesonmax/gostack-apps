import { inject, injectable } from 'tsyringe';
import { differenceInHours } from 'date-fns';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../provider/HashProvider/models/IHashProvider';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  async execute({ token, password }: IRequest): Promise<User | undefined> {
    const userToken = await this.userTokensRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exist');
    }

    if (userToken.used) {
      throw new AppError('User token invalid');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exist');
    }

    const tokenCreatedAt = userToken.created_at;
    if (differenceInHours(Date.now(), tokenCreatedAt) > 1) {
      throw new AppError('Token expiration');
    }

    const passwordHash = await this.hashProvider.generateHash(password);

    user.password = passwordHash;

    const result = await this.usersRepository.save(user);

    await this.userTokensRepository.setUsedToken(userToken);

    return classToClass(result);
  }
}

export default ResetPasswordService;
