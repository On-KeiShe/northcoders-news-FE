import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

function Votes({ article_id, initialVotes =0 }) {
  const [votes, setVotes] = useState(initialVotes);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  function handleVote(voteChange) {
    if (isUpdating) return;
       setIsUpdating(true);
    setError(null);

    setVotes((v) => v + voteChange);

    patchArticleVotes(article_id, voteChange)
      .then(() => {})
      .catch(()=>{      setVotes((v) => v - voteChange);
        setError("Failed to update votes. Please try again.");
      })
      .finally(() => setIsUpdating(false));
  }

  return (
    <>
      <p className="article-paragraph-detail" >🗳 Votes: {votes}</p>

      <section className="vote-buttons">
        <button
          type="button"
          onClick={() => handleVote(1)}
          disabled={isUpdating}
        >
          {isUpdating ? "Voting…" : "👍 Like"}
        </button>

        <button
          type="button"
          onClick={() => handleVote(-1)}
          disabled={isUpdating}
        >
          {isUpdating ? "Voting…" : "👎 Dislike"}
        </button>
      </section>

      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Votes;