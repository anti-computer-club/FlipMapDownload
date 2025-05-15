import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './commentSection.jsx';

function ForumPost({ post }) {
  return (
    <div className="card bg-base-100 shadow-md">
        <div className="card-body">
            <div className="flex justify-between items-center mb-2">
                <span className="badge badge-primary">Discussion</span>
                <span className="text-sm text-gray-500">/exampleUser · 2h ago</span>
            </div>
            <h2 className="card-title">Why are flipphones so swaggy?</h2>
            <p>I’ve been wondering if it;s the increased level of non-verbal communication you get from snappin that thang open and closed. </p>
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
  )
}

export default ForumPost;


