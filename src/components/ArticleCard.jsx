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
      <section classname="article-card-name">
      <p className="article-paragraph-title">📝 Article: {article.title}</p>
      <br/>
      <section className="article-paragraph"> 
      <p className="article-paragraph-detail" >✍️ Author: {article.author}</p>
      <p className="article-paragraph-detail" >📅 Published Date: {date}</p>
      <p className="article-paragraph-detail" >📢 Topic: {article.topic}</p>
      </section>
      <br/>
      </section>
      <img id="article-card-image" src={img} alt={article.title} />

      <section id="votes-and-comment-count">
      <p className="article-paragraph-votes">Votes: {article.votes}</p>
      <p className="article-paragraph-comment-count">Comment Count: {article.comment_count}</p>
      </section>
    </section>
  )
}

export default ArticleCard;