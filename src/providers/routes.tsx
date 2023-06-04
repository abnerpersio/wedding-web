import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Invite } from '~/pages/invite';
import { InviteConfirm } from '~/pages/invite/confirm';
import { SaveTheDate } from '~/pages/save-the-date';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Everything is OK!</h2>,
  },
  {
    path: '/i/:id',
    children: [
      { index: true, element: <Invite /> },
      { path: 'confirm', element: <InviteConfirm /> },
    ],
  },
  {
    path: '/invite/:id',
    children: [
      { index: true, element: <Invite /> },
      { path: 'confirm', element: <InviteConfirm /> },
    ],
  },
  {
    path: '/save-the-date',
    element: <SaveTheDate />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
