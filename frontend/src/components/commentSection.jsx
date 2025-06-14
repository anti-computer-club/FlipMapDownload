import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { getToken, userId } = useAuth();

  // Fetch comments on mount & whenever postId changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${postId}/comments`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();
      const postRes = await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newComment }),
      });

      if (!postRes.ok) {
        const errData = await postRes.json().catch(() => null);
        console.error('Failed to create comment:', postRes.status, errData);
        alert(`Error: ${errData?.message || postRes.statusText}`);
        return;
      }

      setNewComment('');

      // Re-fetch comments
      const res = await fetch(`http://localhost:3000/api/posts/${postId}/comments`);
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
