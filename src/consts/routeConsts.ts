
import {
  IconHome2,
  IconFile3d,
  IconLibraryPhoto,
  IconTexture,
  IconYoga,
  // IconTimeline - Maybe for Workflows
} from '@tabler/icons-react';

type Route = {
  icon: typeof IconHome2,
  path: string,
  label: string,
  // element: JSX.Element,
}

export const routesLookup = {
  home: {
    icon: IconHome2,
    path: "Home",
    label: 'Home',
  },
  models3d: {
    icon: IconFile3d,
    path: `3dModels`,
    label: '3D Models',
  },
  textures: {
    icon: IconTexture,
    path: `Textures`,
    label: 'Textures',
  },
  rigging: {
    icon: IconYoga,
    path: 'Rigging',
    label: 'Rigging',
  },
  gallery: {
    icon: IconLibraryPhoto,
    path: 'Photos',
    label: 'Gallery',
  },
} as const satisfies Record<string, Route>;

export const routes: Route[] = [
  routesLookup.home,
  routesLookup.models3d,
  routesLookup.textures,
  routesLookup.rigging,
  routesLookup.gallery,
]