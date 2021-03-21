import multer from 'multer';
import { resolve, extname } from 'path';
import { randomBytes } from 'crypto';

const tmpDirectory = resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpDirectory,

  storage: multer.diskStorage({
    destination: tmpDirectory,
    filename(request, file, cb) {
      const hash = randomBytes(10).toString('hex');
      const filename = `${Date.now()}-${hash}${extname(file.originalname)}`;

      return cb(null, filename);
    },
  }),
};
