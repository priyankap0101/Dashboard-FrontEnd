/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Sidebar from './sidebar';
import Header from './header';



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex h-full">
      <Sidebar open={openSidebarToggle} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <div className="bg-gray-800 h-full p-4 md:p-6">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
