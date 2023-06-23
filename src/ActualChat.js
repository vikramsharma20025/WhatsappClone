import React, { useEffect, useState } from 'react';
import './ActualChat.css';
import ActualChatHeader from './ActualChatHeader.js';
import Chatbody from './Chatbody.js';
import ChatInput from './ChatInput.js';
import { useParams } from 'react-router-dom';
// import { Avatar } from '@mui/material';
// // import SidebarSearch from './SidebarSearch';
// import SearchOutlined from '@mui/icons-material/SearchOutlined';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { IconButton } from '@mui/material';
// import { useState } from 'react';
import db from './firebase';

function ActualChat() {
  const { roomId } = useParams();
    const [roomName,setRoomName] = useState("");
    useEffect(()=>{
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot)=> setRoomName(snapshot.data().name));
        }
    },[roomId]);

  return (
    <div className='ActualChat'>
        <div>
            <ActualChatHeader />
        </div>
        <div>
            <Chatbody />
        </div>
        <div>
            <ChatInput />
        </div>
    </div>
  )
}

export default ActualChat;