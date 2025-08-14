import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goTopics = () => navigate("/topics");

  return (
    <>
      <header className="header">
        <h1 className="heading" onClick={goHome}>
          NC News
        </h1>
      </header>

      <nav >
        <ul>
          <li className="nav-list" onClick={goHome}>Home</li>
          <li className="nav-list" onClick={goTopics}>Topics</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
