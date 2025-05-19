import { Link } from "react-router-dom";
import testLogo from '../assets/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Card, Button } from "pixel-retroui";

function Header() {
    return (
       <div className="navbar bg-base-100 shadow-sm px-2 rounded-4xl">
        <Card className="w-full relative">
          <div className="flex items-center gap-4">
            <img src={testLogo} alt="Logo" className="logo" />
            <span className="text-3xl font-extrabold">FlipMaps</span>
            <Link to="/" className="btn btn-ghost">Home</Link>
            <Link to="/forum" className="btn btn-ghost">Forum</Link>
            <Link to="/demo" className="btn btn-ghost">Demo</Link>
            <Link to="/about" className="btn btn-ghost">About</Link>
          </div>
          <Card className="ml-auto flex items-center gap-4 absolute top-3 right-4">
            <SignedOut>
                <Button>
                  <SignInButton />
                </Button>
            </SignedOut>
            <UserButton className="px-4"/>
          </Card>
        </Card>
      </div>     )
}
export default Header;


