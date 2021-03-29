import multer from 'multer';
import { resolve, extname } from 'path';
import { randomBytes } from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,
  uploadsFolder: resolve(tmpFolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, cb) {
      const hash = randomBytes(10).toString('hex');
      const filename = `${Date.now()}-${hash}${extname(file.originalname)}`;

      return cb(null, filename);
    },
  }),
};
