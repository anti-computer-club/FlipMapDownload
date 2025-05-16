import React, { useEffect, useState, ChangeEvent } from 'react';
import { useAuth, useUser, SignInButton } from '@clerk/clerk-react';
import Header from './components/header';
import Footer from './components/footer';
import ForumPost from './components/forumPost';
import { formatDistanceToNow } from 'date-fns';

interface Post {
  id: string;
  title: string;
  content: string;
  authorName: string;       // ← Added
  createdAt: string;        // ← Added
}

function Forum() {
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // theme logic omitted for brevity...

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/posts');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: Post[] = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  const handleCreatePost = async () => {
    if (!isSignedIn) {
      alert('You must be signed in to create a post.');
      return;
    }

    try {
      // 1. Get Clerk JWT
      const token = await getToken();

      // 2. Send POST with token (no authorId)
      const res = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,    // ← Added
        },
        body: JSON.stringify({ title, content }), // ← Removed authorId
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Post creation failed:', errorData);
        alert(`Failed to create post: ${errorData.message || res.statusText}`);
        return;
      }

      // 3. Parse and prepend new post
      const newPost: Post = await res.json();
      setPosts(prev => [newPost, ...prev]);

      // 4. Clear inputs
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

  // Helper to format time
  const timeAgo = (iso: string) =>
    formatDistanceToNow(new Date(iso), { addSuffix: true });

  const cardBgClass = isDarkMode ? 'bg-base-300' : 'bg-base-100';

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleTheme={(e: ChangeEvent<HTMLInputElement>) => {
        const theme = e.target.checked ? 'dark' : 'light';
        setIsDarkMode(e.target.checked);
        localStorage.setItem('theme', theme);
      }} />

      <main className="min-h-screen p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">Posts</h1>

            <div className={`card bg-base-200 shadow-md p-4 ${cardBgClass}`}>
              {isSignedIn ? (
                <>
                  <input
                    className="input input-bordered w-full mb-3"
                    placeholder="Post title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <textarea
                    className="textarea textarea-bordered w-full mb-3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={e => setContent(e.target.value)}
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

            <div className="space-y-6">
              {posts.length > 0 ? posts.map(post => (
                <div key={post.id} className="space-y-2">
                  <ForumPost post={post} />
                </div>
              )) : (
                <p className="text-center text-gray-500">No posts yet.</p>
              )}
            </div>
          </section>

          {/* Sidebar omitted for brevity */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Forum;
