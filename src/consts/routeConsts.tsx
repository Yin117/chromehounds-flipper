
import { HomePage } from '@src/pages/Home.page';
import type { JSX } from 'react';
import {
  IconHome2,
  IconFile3d,
  IconLibraryPhoto,
  // IconYoga, - rigging
  // IconTexture - Color and Normal Maps
  // IconTimeline - Maybe for Workflows
} from '@tabler/icons-react';
import { Models3D } from '@src/components/Models3D/Models3D';
import { Photos } from '@src/components/Photos/Photos';

type Route = {
  icon: typeof IconHome2,
  path: string,
  label: string,
  element: JSX.Element,
}

export const routes: Route[] = [
  {
    icon: IconHome2,
    path: "Home",
    label: 'Home',
    element: <HomePage />,
  },
  {
    icon: IconFile3d,
    path: `3dModels`,
    label: '3D Models',
    element: <Models3D  />
  },
  {
    icon: IconLibraryPhoto,
    path: 'Photos',
    label: 'Photos',
    element: <Photos />
  }
  // {
  //   icon: IconFile3d,
  //   path: `3dModels`,
  //   label: '3D Models',
  //   element: <Models3D  />
  // }
]