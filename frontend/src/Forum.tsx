import React, { useEffect, useState, ChangeEvent } from 'react';
import { useAuth, useUser, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import Header from './components/header';
import Footer from './components/footer';
import ForumPost from './components/forumPost.jsx';

interface Post {
  id: string;
  title: string;
  content: string;
  // Add any other post fields here as needed
}

function Forum() {
  const { getToken } = useAuth();
  const { user, isSignedIn } = useUser();

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setIsDarkMode(e.target.checked);
    localStorage.setItem('theme', newTheme);
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/posts');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: Post[] = await res.json();
      console.log('Fetched posts:', data);
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  };

  const handleCreatePost = async () => {
    if (!user) {
      alert('You must be signed in to create a post.');
      return;
    }
  
    try {
      const res = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, authorId: user.id }),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Post creation failed:', errorData);
        alert(`Failed to create post: ${errorData.message || res.statusText}`);
        return;
      }
  
      const newPost = await res.json();
      setPosts([newPost, ...posts]);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error creating post:', err);
      alert('Something went wrong. Please try again.');
    }
  };
  

  useEffect(() => {
    fetchPosts();
  }, []);

  const cardBgClass = isDarkMode ? 'bg-base-300' : 'bg-base-100';

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="min-h-screen bg-base-200 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Forum Content */}
          <section className="md:col-span-2 space-y-6" aria-label="Forum posts and creation">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">Posts</h1>
            </div>

            {/* Post Creation Card */}
            <div className={`card shadow-md p-4 ${cardBgClass}`}>
              {isSignedIn ? (
                <>
                  <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                  <input
                    className="input input-bordered w-full mb-3"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    className="textarea textarea-bordered w-full mb-3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button
                    onClick={handleCreatePost}
                    className="btn btn-primary"
                    disabled={!title.trim() || !content.trim()}
                  >
                    Post
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <p className="mb-3">You must be signed in to create a post.</p>
                  <SignInButton>
                    <button className="btn btn-secondary">Sign In</button>
                  </SignInButton>
                </div>
              )}
            </div>

            {/* Post List */}
            <div className="space-y-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className="space-y-2">
                    <ForumPost post={post} />

                    {/* Comment Accordion */}
                    <details className={`collapse collapse-arrow rounded-lg ${isDarkMode ? 'bg-base-300' : 'bg-base-200'}`}>
                      <summary className="collapse-title text-md font-medium cursor-pointer">
                        View Comments
                      </summary>
                      <div className={`collapse-content space-y-2 p-4 ${cardBgClass}`}>
                        {/* TODO: Replace with dynamic comments */}
                        <div className={`p-3 rounded shadow ${cardBgClass}`}>
                          <p>
                            <span className="font-bold">u/commenter1:</span> Love this!
                          </p>
                        </div>
                        <div className={`p-3 rounded shadow ${cardBgClass}`}>
                          <p>
                            <span className="font-bold">u/commenter2:</span> Totally agree.
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No posts yet.</p>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Sidebar">
            {/* Photo Gallery */}
            <div className={`card shadow-md ${cardBgClass}`}>
              <div className="card-body">
                <h2 className="card-title">Recent Photos</h2>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <img
                    src="/assets/tcl_standin_pic.jpeg"
                    alt="Recent photo 1"
                    className="rounded-md object-cover h-24 w-full"
                  />
                  <img
                    src="/assets/tcl_standin_pic.jpeg"
                    alt="Recent photo 2"
                    className="rounded-md object-cover h-24 w-full"
                  />
                  <img
                    src="/assets/tcl_standin_pic.jpeg"
                    alt="Recent photo 3"
                    className="rounded-md object-cover h-24 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className={`card shadow-md ${cardBgClass}`}>
              <div className="card-body">
                <h2 className="card-title">Top Contributors</h2>
                <ul className="menu rounded-box mt-3">
                  <li>
                    <a href="#" className="justify-between">
                      user1
                      <span className="badge badge-accent">42 posts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="justify-between">
                      user2
                      <span className="badge badge-accent">37 posts</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="justify-between">
                      user3
                      <span className="badge badge-accent">29 posts</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Forum;
