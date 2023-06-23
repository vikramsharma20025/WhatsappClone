import React from 'react'
import './SidebarHeader.css';
// import Avatar from '@mui/material/Avatar';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Avatar } from '@mui/icons-material/';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
// import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

function SidebarHeader() {
  const [{ user },dispatch] = useStateValue();
  return (
    <div className="sidebar__header">
        {/* <Avatar /> */}
        {/* <div className='sidebarnav'> */}
        <div className='Account'>
          <IconButton>
          <Avatar src={user?.photoURL} />
          </IconButton>
        </div>
        <div className='headerbuttons'>
          <IconButton>
          <DonutLargeIcon />
          </IconButton>
          <IconButton>
          <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </div>
        {/* </div> */}
    </div>
  )
}

export default SidebarHeader;