import React from 'react';
import './Sidebar.css';
import SidebarHeader from './SidebarHeader';
import Chats from './Chats.js';
import SidebarSearch from './SidebarSearch';
// import ActualChat from './ActualChat.js';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarHeader />
        {/* <SidebarSearch /> */}
        <Chats />
        
    </div>
  )
}

export default Sidebar;