import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import DeliveryPage from './DeliveryPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/entregavel" element={<DeliveryPage />} />
      </Routes>
    </HashRouter>
  );
}
