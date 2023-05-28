import { Invite, PersistenceInvite } from '~/services/invite/types';

export type PersistenceGuest = {
  id: string;
  name: string;
  type: string;
  phone: string | null;
  email: string | null;
  invites?: PersistenceInvite[];
};

export type Guest = {
  id: string;
  name: string;
  type: string;
  phone: string | null;
  email: string | null;
  invites?: Invite[];
};
