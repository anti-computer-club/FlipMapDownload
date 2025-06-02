import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

// CommentSection component to display and manage comments for each post
function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { getToken, userId } = useAuth();

  // Fetch comments on mount & whenever postId changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/posts/${postId}/comments`);
        if (!res.ok) {
          console.error('Failed to fetch comments:', res.status, res.statusText);
          return;
        }
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error('Error parsing comments JSON:', err);
      }
    };

    fetchComments();
  }, [postId]);

  // Handle comment submission
  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Validate new comment
    try {
      const token = await getToken();
      const postRes = await fetch(`http://localhost:4000/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });
      // Check if the response is ok
      if (!postRes.ok) {
        const errData = await postRes.json().catch(() => null);
        console.error('Failed to create comment:', postRes.status, errData);
        alert(`Error: ${errData?.message || postRes.statusText}`);
        return;
      }

      setNewComment('');

      // Re-fetch comments
      const res = await fetch(`http://localhost:4000/api/posts/${postId}/comments`);
      if (!res.ok) {
        console.error('Failed to fetch comments after posting:', res.status, res.statusText);
        return;
      }
      const data = await res.json();
      setComments(data);

    } catch (err) {
      console.error('Unexpected error in handleSubmit:', err);
      alert('Unexpected error. Check console.');
    }
  };

  //component structure
  return (
    <div className="collapse collapse-arrow bg-base-200 mt-4">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">
        {comments.length} Comment{comments.length !== 1 ? 's' : ''}
      </div>
      <div className="collapse-content">
        <ul className="space-y-2">
          {comments.map((comment) => (
            <li key={comment.id} className="border p-2 rounded-md bg-base-100">
              <p>{comment.content}</p>
              <span className="text-xs text-gray-500">
                by {comment.authorName /* now using authorName */}
              </span>
            </li>
          ))}
        </ul>

        {userId && (
          <form onSubmit={handleSubmit} className="mt-4">
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button className="btn btn-primary mt-2" type="submit">
              Post Comment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CommentSection;
