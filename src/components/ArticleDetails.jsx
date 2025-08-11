import Votes from "./Votes"

function ArticleDetails (){
  return (
        <section className="article-detail">
      <p>Title:</p>
      <p>Author:</p>
      <p>Article:</p>
      <p>Date:</p>
      <Votes />
    </section>
  )
}

export default ArticleDetails