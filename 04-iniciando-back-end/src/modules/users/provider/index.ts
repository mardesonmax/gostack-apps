import { container } from 'tsyringe';

import IUserRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

import UserTokensRepository from '../infra/typeorm/repositories/UserTokensRepository';
import UsersRepository from '../infra/typeorm/repositories/UsersRepository';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
);

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
