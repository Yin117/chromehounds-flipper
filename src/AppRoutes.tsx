import { HashRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import { HomePage } from './pages/Home.page';
import { Models3D } from './components/Models3D/Models3D';
import { Title } from '@mantine/core';
import { Photos } from './components/Photos/Photos';
import { Textures } from './components/Textures/Textures';

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
          <Route path="Photos" element={<Photos />} />
          <Route path="Textures" element={<Textures />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}