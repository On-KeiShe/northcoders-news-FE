import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById } from "../utils/api"
import BackToTopButton from "./BackToTopButton"

import ArticleDetails from "./ArticleDetails"
import CommentCard from "./CommentCard"

function SingleArticlePage () {
  const {article_id} = useParams();
  const [article, setArticle] = useState (null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
  setLoading(true);
  fetchArticleById(article_id)
    .then((data) => {
      setArticle(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(true);
      setLoading(false);
    });
}, [article_id]);

  if (isLoading) return <section className="loading-pattern"><p>Curently Loading ...</p> </section>
  if (isError) return <section><p className="loading-pattern">Uh oh, there is an error!</p></section>

  if(article) {
  return (
    <>
        <ArticleDetails article ={article}/>
        <CommentCard article_id ={article.article_id}/>
              <BackToTopButton />
    </>
  )
}
  }

export default SingleArticlePage