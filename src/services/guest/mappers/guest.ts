import { Guest, PersistenceGuest } from '~/services/guest/types';
import { InviteMapper } from '~/services/invite/mappers/invite';

export class GuestMapper {
  static toDomain(fromPersistence: PersistenceGuest): Guest {
    return {
      id: fromPersistence.id,
      email: fromPersistence.email,
      name: fromPersistence.name,
      phone: fromPersistence.phone,
      type: fromPersistence.type,
      ...(fromPersistence.invites
        ? {
            invites: fromPersistence.invites.map((invite) => InviteMapper.toDomain(invite)),
          }
        : {}),
    };
  }
}
