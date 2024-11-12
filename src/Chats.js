import React ,{ useEffect, useState } from 'react';
import './Chats.css';
// import { Avatar } from '@mui/material';
import Chatitem from './Chatitem';
import db from './firebase.js';
import { useParams } from 'react-router-dom';

function Chats() {
  const [rooms,setRooms] = useState([]);
  const [messages,setMessage] = useState([]);
  
  useEffect(()=>{
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=>
    setRooms(
      snapshot.docs.map((doc)=>({
        id: doc.id,
        data: doc.data(),
      }))
    ));
    
    return ()=>{
      unsubscribe();
    };
  },[]);
  return (
    <div className='Chats'>
      <Chatitem addNewChat/>
      {rooms.map(room=>(
        <Chatitem key={room.id} id={room.id} name={room.data.name} lastmessage={messages[0]?.message} />
      ))}
    </div>
  );
}
export default Chats;