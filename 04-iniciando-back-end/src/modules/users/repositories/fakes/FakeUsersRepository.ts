import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<User[]> {
    let { users } = this;

    if (except_user_id) {
      users = this.users.filter((user) => user.id !== except_user_id);
    }

    return users;
  }

  async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, userData);

    this.users.push(user);

    return user;
  }

  async save(userData: User): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === userData.id);

    this.users[userIndex] = userData;

    return userData;
  }
}

export default FakeUsersRepository;
