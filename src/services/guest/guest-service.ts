import { Env } from '~/constants/env';
import { GuestMapper } from '~/services/guest/mappers/guest';
import { PersistenceGuest } from '~/services/guest/types';
import { HttpService } from '~/services/http/http-service';

type FindGuestResponse = {
  data: PersistenceGuest;
};

class GuestHttpService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService({ baseUrl: Env.API_BASE_URL });
  }

  async find(id: string) {
    const result = (await this.httpService.get<FindGuestResponse>(`/guest/${id}`)).data;
    if (!result) return null;
    return GuestMapper.toDomain(result.data);
  }
}

export const GuestService = new GuestHttpService();
