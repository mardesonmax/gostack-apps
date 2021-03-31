import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../provider/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let showProfile: ShowProfileService;
let createUser: CreateUserService;

describe('ShowProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    showProfile = new ShowProfileService(fakeUsersRepository);

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to show profile user', async () => {
    const user = await createUser.execute({
      name: 'Test',
      email: 'test@email.com',
      password: '123456',
    });

    const show = await showProfile.execute({
      user_id: user.id,
    });

    expect(show.name).toBe('Test');
  });

  it('should not be able to show profile user no authenticate', async () => {
    await expect(
      showProfile.execute({
        user_id: 'no-user-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
