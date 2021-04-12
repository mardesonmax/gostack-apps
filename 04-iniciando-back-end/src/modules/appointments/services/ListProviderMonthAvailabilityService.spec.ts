import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const hoursArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    await Promise.all(
      hoursArray.map((hours) =>
        fakeAppointmentsRepository.create({
          provider_id: 'user_id',
          user_id: '123456',
          date: new Date(2021, 4, 20, hours),
        })
      )
    );

    await fakeAppointmentsRepository.create({
      provider_id: 'user_id',
      user_id: '123456',
      date: new Date(2021, 4, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user_id',
      month: 5,
      year: 2021,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ])
    );
  });
});
