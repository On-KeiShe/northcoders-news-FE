import { useState } from "react";
import {postComment} from "../utils/api"



function CommentForm ({ article_id, onCommentAdded}){
const [body, setBody] = useState("")
const [isSubmitting, setIsSubmitting] = useState(false); 
const [error, setError] = useState(null);

function handleCommentInput(event){
setBody (event.target.value)
if (error) setError(null); 
}

function handleSubmit(event) {
    event.preventDefault()
    if(!body.trim())return;

    setIsSubmitting(true);
    setError(null);
   
postComment(article_id, {username: "cooljmessy", body: body.trim()})
.then((newComment)=>{
  if(onCommentAdded) onCommentAdded(newComment);
  setBody("")
  setIsSubmitting(false);
})
     .catch(() => {
        setError("Failed to post comment.")
        setIsSubmitting(false);
      })
}



  return (
    <section>
      <form onSubmit={handleSubmit} className="comment-form">
        <input onChange={handleCommentInput} type="text" placeholder="Type your comment here... " value={body} disabled={isSubmitting} ></input>
        <button disabled={!body.trim() || isSubmitting}>
          {isSubmitting ? "Posting..." : "Submit"}</button>
      </form>
         {error && <p className="error-message">{error}</p>} 
    </section>
  )
}

export default CommentForm;