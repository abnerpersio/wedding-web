import { Env } from '~/constants/env';
import { HttpService } from '~/services/http/http-service';
import { InviteMapper } from '~/services/invite/mappers/invite';
import { InviteStatus, PersistenceInvite } from '~/services/invite/types';

type InviteResponse = {
  data: PersistenceInvite;
};

export type UpdateInvite = {
  status?: InviteStatus;
  comments?: string;
};

class InviteHttpService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService({ baseUrl: Env.API_BASE_URL });
  }

  async find(id: string) {
    const result = (await this.httpService.get<InviteResponse>(`/invite/${id}`)).data;
    if (!result?.data) return null;
    return InviteMapper.toDomain(result.data);
  }

  async update(id: string, payload: UpdateInvite) {
    const result = (await this.httpService.put<InviteResponse>(`/invite/${id}`, payload)).data;
    if (!result?.data) return null;
    return InviteMapper.toDomain(result.data);
  }
}

export const InviteService = new InviteHttpService();
