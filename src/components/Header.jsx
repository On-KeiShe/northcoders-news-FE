import { useNavigate } from "react-router-dom";

function Header(){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return(
    <header>
    <h1 className="heading" onClick={handleClick}>
      NC News
    </h1>
    </header>
)
}

export default Header;