import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Not, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ id });

    return user;
  }

  async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    const users = this.ormRepository.find({
      where: except_user_id && {
        id: Not(except_user_id),
      },
    });

    return users;
  }

  async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);
    return user;
  }

  async save(user: User): Promise<User> {
    await this.ormRepository.save(user);
    return user;
  }
}

export default UsersRepository;
