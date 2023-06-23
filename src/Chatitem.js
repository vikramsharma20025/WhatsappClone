import React from 'react';
import { Avatar } from '@mui/material';
import './Chatitem.css';
import db from './firebase.js';
// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
// , { useEffect, useState }
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Chatitem({id,name, addNewChat, lastmessage }) {
  // const { roomId } = useParams();
  const { roomId } = useParams();
  const [roomName,setRoomName] = useState("");
  // const [messages,setMessage] = useState([]);
  useEffect(()=>{
    if(roomId){
        db.collection("rooms").doc(roomId).onSnapshot((snapshot)=> setRoomName(snapshot.data().name));
        
    }
  },[roomId]);
  // useEffect(()=>{
  //   if(id){
  //     db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc)=>doc.data())));
  //   }
  // },[id]);
    const createChat=()=>{
        const roomName = prompt("Please enter room name for chat");
        if(roomName){
            // do some stuff in database
            db.collection('rooms').add({
                name: roomName
            });
        }
    };
    // const getChat=()=>{
    //     const roomName = 
    // }
  return !addNewChat? (
    <Link to={`/rooms/${id}`}>
        <div className='chatitem'>
            <Avatar src={`https://avatars.dicebear.com/api/human/aslkjdkasjlkdj/${Math.floor(Math.random()*5000)}.svg`}/>
            <div className='chatinfo'>
                <h2>{name}</h2>
                <p>{lastmessage}</p>
            </div>
        </div>
    </Link>
  ): (
    <div onClick={createChat} className='chatitem'>
        <h1>Add new Chat</h1>
    </div>
  );
}

export default Chatitem;