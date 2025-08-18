import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="loading-pattern">
      <h2>Page not found (404)</h2>
      <p>Sorry, we couldn’t find that page.</p>
      <p><Link to="/">Go back home</Link> or <Link to="/topics">browse topics</Link>.</p>
    </section>
  );
}
export default NotFound;