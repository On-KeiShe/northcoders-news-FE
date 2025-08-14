import { fetchCommentsByArticleId, deleteCommentByID } from "../utils/api";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

function CommentCard({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  const currentUser = { username: "cooljmessy" };

  useEffect(() => {
    setLoading(true);
    setError(false);
    setDeleteError(null);

    fetchCommentsByArticleId(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [article_id]);

  function addNewComment(newComment) {
    setComments((prevComments) => [newComment, ...prevComments]);
  }

  function handleDelete(comment_id) {
    if (deletingId === comment_id) return;
    setDeletingId(comment_id);
    setDeleteError(null);
    deleteCommentByID(comment_id)
      .then(() => {
        setComments((prev) => prev.filter((c) => c.comment_id !== comment_id));
      })
      .catch(() => {
        setDeleteError("Failed to delete comment. Pleaae try again");
      })
      .finally(() => {
        setDeletingId(null);
      });
  }

  if (isLoading) {
    return (
      <section className="loading-pattern">
        <p>Currently Loading ...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <p className="loading-pattern">Uh oh, there is an error!</p>
        <CommentForm article_id={article_id} onCommentAdded={addNewComment} />
      </section>
    );
  }

  if (comments.length === 0) {
    return (
      <section>
        <p className="loading-pattern">No comments yet.</p>
        <CommentForm article_id={article_id} onCommentAdded={addNewComment} />
      </section>
    );
  }

  return (
    <section>
      <ul className="comment-card">
        <h3 id="comment-heading"> Comments:</h3>
        {comments.map((comment) => {
          const date = new Date(comment.created_at).toLocaleDateString();
          const isOwn = comment.author === currentUser.username;
          return (
            <li key={comment.comment_id} className="comment-item">
              <p>{comment.body}</p>
              <br />
              <p id="author-date-votes">
                <span>By: {comment.author}</span>
                <span>Date: {date}</span>
                <span>Votes: {comment.votes}</span>
              </p>
              {isOwn && (
                <section id="delete-comment-button">
                  <button
                    onClick={() => handleDelete(comment.comment_id)}
                    disabled={deletingId === comment.comment_id}
                  >
                    {deletingId === comment.comment_id
                      ? "Deleting Comment…"
                      : "🗑  Delete Comment"}
                  </button>
                </section>
              )}
            </li>
          );
        })}
      </ul>
      <CommentForm article_id={article_id} onCommentAdded={addNewComment} />
    </section>
  );
}

export default CommentCard;
