import { useEffect, useState } from "react";
import fetchArticles from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((allArticles) => {
      setArticles(allArticles);
    });
  }, []);

  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}

export default ArticleList;