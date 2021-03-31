import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../provider/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;
let createUser: CreateUserService;

describe('UpdateProfileService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider
    );

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should not be able to update profile from user non authenticate', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'undefined',
        name: 'avatar.png',
        email: 'text@email.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update profile from user authenticate', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const userUpdate = await updateProfile.execute({
      user_id: user.id,
      name: 'Test',
      email: 'test@example.com',
    });

    expect(userUpdate.name).toBe('Test');
    expect(userUpdate.email).toBe('test@example.com');
  });

  it('should not be able to change to another user email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user = await createUser.execute({
      name: 'Test',
      email: 'test@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Test',
        email: 'johndoe@example.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updatePassword = await updateProfile.execute({
      user_id: user.id,
      name: 'Test',
      email: 'johndoe@example.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatePassword.password).toBe('123123');
  });

  it('should not be able to update the password without passing the old password', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Test',
        email: 'johndoe@example.com',
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password with invalid old password', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Test',
        email: 'johndoe@example.com',
        old_password: 'invalid_old_password',
        password: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
