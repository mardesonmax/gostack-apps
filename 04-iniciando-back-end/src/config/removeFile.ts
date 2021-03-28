import path from 'path';
import fs from 'fs';
import uploadConfig from '@config/upload';

export default async function removeFile(fileName: string): Promise<void> {
  const userAvatarFilePath = path.join(uploadConfig.directory, fileName);
  const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

  if (userAvatarFileExists) {
    await fs.promises.unlink(userAvatarFilePath);
  }
}
