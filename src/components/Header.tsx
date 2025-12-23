//imports
import './Header.css'
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <>
      <div className='header-bar'>
        <p>Logo</p>
        <p>StoreName</p>
        <button onClick={() => navigate("/Signin")}>SignIn</button>
      </div>
    </>
  );
}

export default Header;