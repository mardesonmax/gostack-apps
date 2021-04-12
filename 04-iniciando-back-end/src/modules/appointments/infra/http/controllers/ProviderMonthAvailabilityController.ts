import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ProviderMonthAvailabilityService
    );

    const availability = await listProviderDayAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
