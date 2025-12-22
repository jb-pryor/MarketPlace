//imports
import './Sidebar.css'

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {

  if(!isOpen) return null;

  return (
    <>
      <div className="sidebar">
        <button className="close-btn" onClick={onClose}>✕</button>
        <p>Cart Summary</p>
      </div>
    </>
  );
}

export default Sidebar;