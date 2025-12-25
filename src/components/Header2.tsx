//imports
import './Header2.css'

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



type HeaderProps = {
  onMenuClick: () => void;
};

function Header2({ onMenuClick }: HeaderProps) {


  return (
    <>
      <div className="header-bar-2">
        <div><FaSearch /><input type="text" /></div>
        <button onClick={onMenuClick}><FaShoppingCart size={18}/></button>
      </div>
    </>
  );
}

export default Header2;