import Votes from "./Votes"

function ArticleDetails({ article }) {
  const date = new Date(article.created_at).toLocaleDateString();
  const img = article.article_img_url;

  return (
    <section className="article-detail">
      <p className="article-paragraph-title">📝 Article Title: {article.title}</p>
      <img id="article-details-image" src={img} alt={article.title} />
      <p className="article-paragraph-body">{article.body} </p>
      <section className="article-paragraph-info">
      <p className="article-paragraph-detail">✍️ Author: {article.author}</p>
      <p className="article-paragraph-detail">📅 Published Date: {date}</p>
      <p className="article-paragraph-detail">📢 Topic: {article.topic}</p>
           <Votes 
        article_id={article.article_id}
        initialVotes={article.votes}
      />

      </section>

    </section>
  );
}

export default ArticleDetails;
