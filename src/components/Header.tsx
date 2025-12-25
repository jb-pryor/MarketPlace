//imports
import './Header.css'
import { useNavigate } from "react-router-dom";

import { FaSquarespace } from "react-icons/fa";

import { useUser } from "../context/UserContext";


function Header() {

  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <div className='header-bar'>
        < FaSquarespace size={22} />
        <p>StoreName</p>
        {user ? ( <p>Welcome, {user}</p>) : (<button onClick={() => navigate("/Signin")}>SignIn</button>)}
      </div>
    </>
  );
}

export default Header;