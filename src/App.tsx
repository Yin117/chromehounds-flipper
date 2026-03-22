import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import { HomePage } from './pages/Home.page';
import { Models3D } from './components/Models3D/Models3D';

export function App() {
  return (
    <BrowserRouter basename="/chromehounds-flipper">
      <Routes>
        {/* Wrap everything in the Layout, note lack of `/` makes it relative */}
        <Route element={<AppLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="3dModels" element={<Models3D />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}