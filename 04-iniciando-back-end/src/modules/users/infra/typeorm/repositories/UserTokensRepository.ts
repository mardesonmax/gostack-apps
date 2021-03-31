import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import { getRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  async generate(user_id: string): Promise<UserToken> {
    const token = this.ormRepository.create({ user_id });

    await this.ormRepository.save(token);

    return token;
  }

  async findByToken(token: string): Promise<UserToken | undefined> {
    return this.ormRepository.findOne({ where: { token } });
  }

  async setUsedToken(userToken: UserToken): Promise<void> {
    await this.ormRepository.save({ ...userToken, used: true });
  }
}

export default UserTokensRepository;
