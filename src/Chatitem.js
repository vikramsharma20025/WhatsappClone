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
            <Avatar src={`https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg`}/>
            <div className='chatinfo'>
                <h2>{name}</h2>
                <p>{lastmessage}</p>
            </div>
        </div>
    </Link>
  ): (
    <div onClick={createChat} className='chatitem'>
        <h2>Add new Chat</h2>
    </div>
  );
}

export default Chatitem;