import { GuestMapper } from '~/services/guest/mappers/guest';
import { Invite, PersistenceInvite } from '~/services/invite/types';

export class InviteMapper {
  static toDomain(persistenceInvite: PersistenceInvite): Invite {
    return {
      id: persistenceInvite.id,
      companions: persistenceInvite.companions,
      status: persistenceInvite.status,
      comments: persistenceInvite.comments,
      ...(persistenceInvite.guest
        ? {
            guest: GuestMapper.toDomain(persistenceInvite.guest),
          }
        : {}),
    };
  }
}
