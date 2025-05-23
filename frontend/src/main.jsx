import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'; 
import './App.css';

import Home from './Home.jsx';
import Forum from './Forum.tsx';
import Demo from './Demo.jsx';
import About from './About.jsx';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </StrictMode>
);