import React, { useEffect, useState, ChangeEvent } from 'react';
import { useAuth, useUser, SignInButton } from '@clerk/clerk-react';
import Header from './components/header';
import Footer from './components/footer';
import ForumPost from './components/forumPost';
import { formatDistanceToNow } from 'date-fns';

import mockup2 from './assets/mockup2.jpg';

import {Card, Button, Popup, Accordion, TextArea, Input} from 'pixel-retroui';

interface Post {
  id: string;
  title: string;
  content: string;
  authorName: string;      
  createdAt: string;        
}

function Forum() {
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


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
      // Get Clerk JWT
      const token = await getToken();

      // Send POST with token (no authorId)
      const res = await fetch('http://localhost:4000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ title, content }), 
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Post creation failed:', errorData);
        alert(`Failed to create post: ${errorData.message || res.statusText}`);
        return;
      }

      // Parse and prepend new post
      const newPost: Post = await res.json();
      setPosts(prev => [newPost, ...prev]);

      // Clear inputs
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

      <main className="bg-grid min-h-screen p-6">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <section className="md:col-span-1 space-y-6 items-stretch">
            <Card shadowColor='#9437ff' className="p-2">
              <p className="text-2xl font-bold">Forum</p>
              <p>Welcome to the forum! Share your thoughts and ideas.</p>
            </Card>
            <Card shadowColor='#9437ff' className="p-0">
              <img src={mockup2} alt="You wish you were this cool, don't you?" className="m-0" />
            </Card>
            <Card shadowColor='#9437ff' className={`p-4 ${cardBgClass}`}>
              <h2 className="text-xl font-bold">Latest Posts</h2>
              {posts.slice(0, 5).map(post => (
                <div key={post.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p>{post.content}</p>
                  <p className="text-sm text-gray-500">{timeAgo(post.createdAt)}</p>
                </div>
              ))}
            </Card>
          </section>
          <section className="md:col-span-2 space-y-6">
            <p className="text-3xl font-bold">Posts</p>

            <Card shadowColor='#9437ff' className="p-4">
              {isSignedIn ? (
                <div className="p-4 flex flex-col items-center ">  
                  <Input
                    className="input input-bordered w-full m-3"
                    placeholder="Post title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <TextArea
                    className="textarea textarea-bordered w-full mb-3"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                  />
                  <Button
                    shadow='#9437ff'
                    onClick={handleCreatePost}
                    className="w-full"
                    disabled={!title.trim() || !content.trim()}
                  >
                    Post
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="mb-3">You must be signed in to create a post.</p>
                  <SignInButton>
                    <button className="btn btn-secondary">Sign In</button>
                  </SignInButton>
                </div>
              )}
            </Card>

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
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Forum;
