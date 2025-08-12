function fetchArticles() {
  return fetch("https://nc-news-by3b.onrender.com/api/articles")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.articles;
    });
}

export default fetchArticles;