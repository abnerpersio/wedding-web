import { InviteService } from '~/services/invite/invite-service';

import { useQuery } from '@tanstack/react-query';

export function useInvite(id: string | undefined) {
  const {
    isLoading,
    isError,
    data: invite = null,
    refetch
  } = useQuery({
    queryKey: ['get-invite', id],
    queryFn: () => InviteService.find(id!),
    retry: 2,
    enabled: !!id,
    staleTime: 2 * 60 * 1000,
  });

  return { isLoading, isError, invite, refetch };
}
