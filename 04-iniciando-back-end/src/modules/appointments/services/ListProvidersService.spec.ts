import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersServices from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersServices;

describe('ListProvidersService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersServices(fakeUsersRepository);
  });

  it('should be able to show profile user', async () => {
    await fakeUsersRepository.create({
      name: 'User 1',
      email: 'user_01@email.com',
      password: '123456',
    });

    await fakeUsersRepository.create({
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

    expect(providers).toEqual(expect.not.arrayContaining([userLogged]));
  });
});
