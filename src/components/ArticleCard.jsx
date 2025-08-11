import { useNavigate } from "react-router-dom";
function ArticleCard () {
  const navigate = useNavigate();

const handleClick = () => {
  navigate(`/articles/${article_id}`);
}

  return (
    <section className="article-card" onClick={handleClick}>
      <p>Title:</p>
      <p>Author:</p>
      <p>Date:</p>
      <img src="" alt="" />
      <p>Votes:</p>
      <p>Comment Count:</p>
    </section>
  )
}

export default ArticleCard;