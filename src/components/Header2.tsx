//imports
import './Header2.css'

type HeaderProps = {
  onMenuClick: () => void;
};

function Header2({ onMenuClick }: HeaderProps) {
  return (
    <>
      <div className="header-bar-2">
        <p>SearchBar</p>
        <button onClick={onMenuClick}>ShopCart</button>
      </div>
    </>
  );
}

export default Header2;