import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './commentSection.jsx';
import { formatDistanceToNow } from 'date-fns';

// Component to display a forum post with comments
function ForumPost({ post }) {
  // Format the creation date to a human-readable "time ago" format
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  // Render the forum post with title, content, author, and time
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-primary">Discussion</span>
          <span className="text-sm text-gray-500">
            @{post.authorName} · {timeAgo}
          </span>
        </div>
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <div className="card-actions mt-4">
          <button className="btn btn-square">
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button className="btn btn-circle">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>

        {/* Comment Section */}
        <CommentSection postId={post.id} />
      </div>
    </div>
  );
}

export default ForumPost;
