import Header from '../components/Header'
import Header2 from '../components/Header2'
import Sidebar from '../components/Sidebar' 
import Shop from '../components/Shop'

import { useState } from 'react'


function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev => !prev);
    };

  return (
    <>
      <Header></Header>
      <Header2 onMenuClick={toggleSidebar}></Header2>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}></Sidebar>
      <Shop></Shop>
    </>
  );
}

export default Home;