import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './Home.jsx';
import Forum from './Forum.jsx';
import Demo from './Demo.jsx';
import Downloads from './Downloads.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </Router>
  </StrictMode>
);