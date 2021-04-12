import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersServices from '@modules/appointments/services/ListProvidersServices';

class ProvidersController {
  async list(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersServices);

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}

export default ProvidersController;
