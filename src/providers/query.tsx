import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export function QueryProvider(props: Props) {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
