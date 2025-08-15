import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

function TopicArticlesPage() {
  const { topic } = useParams()
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchArticlesByTopic(topic)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles for this topic.");
        setLoading(false);
      });
  }, [topic]);

  if (isLoading) return <section className="loading-pattern"><p>Loading {topic} articles…</p> </section>
  if (error) return <section className="loading-pattern"><p>{error}</p> </section>
  if (articles.length === 0) return <section className="loading-pattern"> <p>No articles for “{topic}”.</p></section>

  return (
    <>
        <section className="topic-card">
      <h2 className="topics-page-title">Topic: {topic}</h2>
          </section>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}

    </>
  );
}

export default TopicArticlesPage;