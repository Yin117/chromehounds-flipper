import { Title } from '@mantine/core';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@src/AppLayout';
import { HomePage } from '@src/pages/Home.page';
import { Models3D } from '@src/components/Models3D/Models3D';
import { Gallery } from '@src/components/Gallery/Gallery';
import { Textures } from '@src/components/Textures/Textures';
import { Rigging } from '@src/components/Rigging/Rigging';
import { Audio } from '@src/components/AudioExtract/Audio';
import { Maps } from './components/Maps/Maps';

export function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Wrap everything in the Layout, note lack of `/` makes it relative */}
        <Route element={<AppLayout />}>
          {/* This catches everything else and renders it inside AppLayout */}
          <Route path="*" element={<Title>Page not Found</Title>} />

          <Route path="Home" element={<HomePage />} />
          <Route path="3dModels" element={<Models3D />} />
          <Route path="Textures" element={<Textures />} />
          <Route path="Rigging" element={<Rigging />} />
          <Route path="Photos" element={<Gallery />} />
          <Route path="Audio" element={<Audio />} />
          <Route path="Maps" element={<Maps />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}