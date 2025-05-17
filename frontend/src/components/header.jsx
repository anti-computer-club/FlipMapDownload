import { Link } from "react-router-dom";
import testLogo from '../assets/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Header({ isDarkMode, toggleTheme }) {
    return (
       <div className="navbar bg-base-100 shadow-sm px-2">
        <div className="flex items-center gap-4">
          <img src={testLogo} alt="Logo" className="logo" />
          <span className="text-3xl font-extrabold">FlipMaps</span>
          <Link to="/" className="btn btn-ghost">Home</Link>
          <Link to="/forum" className="btn btn-ghost">Forum</Link>
          <Link to="/demo" className="btn btn-ghost">Demo</Link>
          <Link to="/downloads" className="btn btn-ghost">Downloads</Link>
          <Link to="/about" className="btn btn-ghost">About</Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              className="toggle theme-controller"
              checked={isDarkMode}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <UserButton />
          </label>
        </div>
      </div> 
    )
}
export default Header;


