import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';

const BASE_URL = '/chromehounds-flipper/';

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
