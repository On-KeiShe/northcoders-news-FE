import { useNavigate } from "react-router-dom";


function ArticleCard ({article}) {
  const navigate = useNavigate();

const handleClick = () => {
  navigate(`/articles/${article.article_id}`);
}

const date = new Date (article.created_at).toLocaleDateString();
const img = article.article_img_url 


  return (
    <section className="article-card" onClick={handleClick}>
      <p className="article-paragraph">📝 Article Title: {article.title}</p>
      <p className="article-paragraph">✍️ Author: {article.author}</p>
      <p className="article-paragraph">📅 Published Date: {date}</p>
      <img id="article-card-image" src={img} alt={article.title} />
      <p className="article-paragraph-votes">Votes: {article.votes}</p>
      <p className="article-paragraph-comment-count">Comment Count: {article.comment_count}</p>
    </section>
  )
}

export default ArticleCard;