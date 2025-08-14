import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
     setLoading(true);
    fetchArticles()
    .then((allArticles) => {
      setArticles(allArticles)
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
}, []);

  if (isLoading) return <section className="loading-pattern"><p>Curently Loading ...</p> </section>
  if (isError) return <section><p className="loading-pattern">Uh oh, there is an error!</p></section>

  if(articles) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}
  }


export default ArticleList;