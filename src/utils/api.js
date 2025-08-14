export function fetchArticles() {
  return fetch("https://nc-news-by3b.onrender.com/api/articles")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.articles;
    });
}

export function fetchArticleById(article_id) {
  return fetch (`https://nc-news-by3b.onrender.com/api/articles/${article_id}`)
      .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.article
    });
}

export function fetchCommentsByArticleId(article_id){
    return fetch (`https://nc-news-by3b.onrender.com/api/articles/${article_id}/comments`)
          .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.comments
    });
}

export function postComment (article_id,{ username, body }) {
  return fetch(`https://nc-news-by3b.onrender.com/api/articles/${article_id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, body }),
  })
   .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.comment})
}

export function deleteCommentByID(comment_id) {
  return fetch (`https://nc-news-by3b.onrender.com/api/comments/${comment_id}`, {
    method: "DELETE",
  })
  .then ((response)=>{if (!response.ok) {
      throw new Error(`Failed to delete comment: ${response.status}`)}})

}

export function patchArticleVotes(article_id, voteChange){
  return fetch (`https://nc-news-by3b.onrender.com/api/articles/${article_id}`,{
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes: voteChange }),
  })
    .then((response) => response.json())
    .then((data) => data.article)
}