import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

import './App.css';

import App from './Home.jsx';
import Forum from './Forum.jsx';
import Demo from './Demo.jsx';
import Downloads from './Downloads.jsx';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          <Route path="/forum" element={
            <>
              <SignedIn>
                <Forum />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>            </>} 
          />
          <Route path="/demo" element={<Demo />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </StrictMode>
);