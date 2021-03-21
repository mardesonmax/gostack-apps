import { startOfHour } from 'date-fns';
import { getCustomRepository, getRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  async execute({ provider_id, date }: Request): Promise<Appointment> {
    const usersRepository = getRepository(User);
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const user = await usersRepository.findOne(provider_id);

    if (!user) {
      throw new AppError('Provider does not exist');
    }

    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointmentCreate = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    const appointment = await appointmentsRepository.save(appointmentCreate);

    return appointment;
  }
}

export default CreateAppointmentService;
