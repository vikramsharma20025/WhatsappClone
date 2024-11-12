import React, { useEffect } from 'react';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ActualChatHeader.css';
// import { useParams } from 'react-router-dom';
// import db from './firebase';
// , { useEffect, useState }
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from './firebase';
//{" "}{new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}

function ActualChatHeader() {
    const { roomId } = useParams();
    const [roomName,setRoomName] = useState("");
    const [messages,setMessage] = useState([]);
    useEffect(()=>{
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot)=> setRoomName(snapshot.data().name));
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc)=>doc.data())));
        }
        // db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc)=>doc.data())));
    },[roomId]);
    return (
    <div className='ActualChatHeader'>
            <div className='ActualChathead'>
                <Avatar src={`https://avatars.dicebear.com/api/human/aslkjdkasjlkdj/${Math.floor(Math.random()*5000)}.svg`}/>
                <div className='ActualChatinfo'>
                    <h2>{roomName}</h2>
                    <p>Last message {messages[0]?.message} {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='ActualChatHeadermenus'>
                <div className='searchicon'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                </div>
                <div className='Menu'>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
    }

export default ActualChatHeader