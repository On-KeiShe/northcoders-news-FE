import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/api";
import { Link } from "react-router-dom";

function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchTopics()
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load topics");
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <section className="loading-pattern">
        <p>Loading topics…</p>
      </section>
    );
  if (error)
    return (
      <section className="loading-pattern">
        <p>{error}</p>
      </section>
    );

  return (
    <section className="topic-card">
      <h2 className="topics-page-title">Topics</h2>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li className="topic-item" key={topic.slug}>
            <Link className="topic-item-link" to={`/topics/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopicsPage;
