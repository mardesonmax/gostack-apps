import { container } from 'tsyringe';

import AppointmentsRepository from '../infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository
);
