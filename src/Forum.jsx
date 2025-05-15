import { useState, useEffect } from 'react';
import './App.css';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import ForumPost from './components/forumPost.jsx';

function Forum() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setIsDarkMode(e.target.checked);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-base-200 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Post Feed */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <ForumPost />
          
            {/* Repeat more post cards */}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Photo Gallery */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Recent Photos</h2>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <img src="/assets/tcl_standin_pic.jpeg" className="rounded" />
                  <img src="/assets/tcl_standin_pic.jpeg" className="rounded" />
                  <img src="/assets/tcl_standin_pic.jpeg" className="rounded" />
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Top Contributors</h2>
                <ul className="menu bg-base-100 rounded-box mt-2">
                  <li><a>user1<span className="badge badge-accent">something</span></a></li>
                  <li><a>user2<span className="badge badge-accent">something</span></a></li>
                  <li><a>user3<span className="badge badge-accent">something</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Forum;