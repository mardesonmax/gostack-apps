import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersServices from './ListProvidersServices';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersServices;

describe('ListProvidersServices', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersServices(fakeUsersRepository);
  });

  it('should be able to show profile user', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'User 1',
      email: 'user_01@email.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'User 2',
      email: 'user_02@email.com',
      password: '123456',
    });

    const userLogged = await fakeUsersRepository.create({
      name: 'User Logged',
      email: 'user_01@email.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: userLogged.id,
    });

    expect(providers).toEqual([
      {
        id: user1.id,
        email: user1.email,
        name: user1.name,
      },
      {
        id: user2.id,
        email: user2.email,
        name: user2.name,
      },
    ]);
  });
});
