import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  filename: string;
}

class UpdateUserAvatarService {
  async execute({ user_id, filename }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const removeFile = async (file: string) => {
      const userAvatarFilePath = path.join(uploadConfig.directory, file);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    };

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      await removeFile(filename);
      throw new AppError('Only authenticate users can change avatar', 401);
    }

    if (user.avatar) {
      await removeFile(user.avatar);
    }

    user.avatar = filename;

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default UpdateUserAvatarService;
