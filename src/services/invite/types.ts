import { Guest, PersistenceGuest } from '~/services/guest/types';

export type InviteStatus = 'waiting' | 'confirmed' | 'refused';

export type PersistenceInvite = {
  id: string;
  status: InviteStatus;
  companions: number;
  comments: string | null;
  guest?: PersistenceGuest;
};

export type Invite = {
  id: string;
  status: InviteStatus;
  companions: number;
  comments: string | null;
  guest?: Guest;
};
