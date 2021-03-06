import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import providersRouter from '@modules/appointments/infra/http/routes/providers.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRoutes);
routes.use('/providers', providersRouter);

export default routes;
