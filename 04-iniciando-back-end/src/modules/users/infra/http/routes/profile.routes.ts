import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRoutes = Router();

profileRoutes.use(ensureAuthenticated);

const profileController = new ProfileController();

profileRoutes.put('/', profileController.update);
profileRoutes.get('/', profileController.show);

export default profileRoutes;
