import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentsService from './ListProviderAppointmentsService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const hoursArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    const appointments = await Promise.all(
      hoursArray.map((hours) =>
        fakeAppointmentsRepository.create({
          provider_id: 'provider_id',
          user_id: 'user_id',
          date: new Date(2021, 4, 20, hours),
        })
      )
    );

    const listAppointmentsDay = await listProviderAppointments.execute({
      provider_id: 'provider_id',
      day: 20,
      month: 5,
      year: 2021,
    });

    expect(listAppointmentsDay).toEqual(appointments);
  });
});
