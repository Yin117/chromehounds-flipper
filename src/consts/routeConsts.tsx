
import { HomePage } from '@src/pages/Home.page';
import type { JSX } from 'react';
import {
  IconHome2,
  IconGauge,
} from '@tabler/icons-react';
import { Models3D } from '@src/components/Models3D/Models3D';

type Route = {
  icon: typeof IconHome2,
  path: string,
  label: string,
  element: JSX.Element,
}

export const routes: Route[] = [
  {
    icon: IconHome2,
    path: "",
    label: 'Home',
    element: <HomePage />,
  },
  {
    icon: IconGauge,
    path: `3dModels`,
    label: '3D Models',
    element: <Models3D  />
  }
]