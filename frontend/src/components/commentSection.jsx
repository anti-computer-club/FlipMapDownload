import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { getToken, userId } = useAuth();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`http://localhost:4000/api/posts/${postId}/comments`);
      const data = await res.json();
      setComments(data);
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    await fetch(`http://localhost:4000/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newComment }),
    });
    setNewComment('');
    const res = await fetch(`http://localhost:4000/api/posts/${postId}/comments`);
    setComments(await res.json());
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
              <span className="text-xs text-gray-500">by {comment.authorId}</span>
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
