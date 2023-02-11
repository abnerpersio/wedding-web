import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Invite } from '~/pages/invite';
import { InviteConfirm } from '~/pages/invite/confirm';

const router = createBrowserRouter([
  {
    path: '/invite/:id',
    children: [
      {
        element: <Invite />,
        index: true,
      },
      {
        element: <InviteConfirm />,
        path: 'confirm',
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
