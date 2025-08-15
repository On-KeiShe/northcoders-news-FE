import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");  


  useEffect(() => {
     setLoading(true);
    setError(false);
    fetchArticles({ sort_by: sortBy, order })
    .then((allArticles) => {
      setArticles(allArticles)
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
}, [sortBy, order]);

function handleSortChange(event) {
    setSortBy(event.target.value);
  }


  if (isLoading) return <section className="loading-pattern"><p>Curently Loading ...</p> </section>
  if (isError) return <section><p className="loading-pattern">Uh oh, there is an error!</p></section>

  if(articles) {
  return (
    <>
<div className="topic-card">
  <div className="sort-options">
  <label htmlFor="sortby">Sort by: </label>
  <select id="sortby" value={sortBy} onChange={handleSortChange}>
    <option value="created_at">Date</option>
    <option value="comment_count">Comment count</option>
    <option value="votes">Votes</option>
  </select>

  <label htmlFor="order" style={{ marginLeft: "10px" }}>Order: </label>
  <select
    id="order"
    value={order}
    onChange={(event) => setOrder(event.target.value)}
  >
    <option value="asc">Ascending ↑</option>
    <option value="desc">Descending ↓</option>
  </select>
  </div>
</div>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}
  }


export default ArticleList;