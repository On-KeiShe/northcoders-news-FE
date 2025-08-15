export function fetchArticles({ sort_by = "created_at", order = "desc" } = {}) {
  const url = new URL("https://nc-news-by3b.onrender.com/api/articles");

  url.searchParams.set("sort_by", sort_by);
  url.searchParams.set("order", order); 
    return fetch(url.toString())
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.articles;
    });
}

export function fetchArticlesByTopic(topic){
  return fetch(`https://nc-news-by3b.onrender.com/api/articles?topic=${topic}`)
    .then((response) => response.json())
    .then((data) => data.articles);
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

export function fetchTopics () {
  return fetch ("https://nc-news-by3b.onrender.com/api/topics")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.topics
    });
}