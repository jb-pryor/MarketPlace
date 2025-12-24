//imports
import './Header.css'
import { useNavigate } from "react-router-dom";

import { FaSquarespace } from "react-icons/fa";


function Header() {

  const navigate = useNavigate();

  return (
    <>
      <div className='header-bar'>
        < FaSquarespace size={22} />
        <p>StoreName</p>
        <button onClick={() => navigate("/Signin")}>SignIn</button>
      </div>
    </>
  );
}

export default Header;