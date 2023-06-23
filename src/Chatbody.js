import React,{ useEffect, useState } from 'react';
import './Chatbody.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Chatbody() {
  const { roomId } = useParams();
  const [{ user },dispatch] = useStateValue();
  const [roomName,setRoomName] = useState("");
  const [messages,setMessage] = useState();
  useEffect(() => {
    if(roomId){
      db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot) => setMessage(snapshot.docs.map((doc)=>doc.data())));
    }
  },[roomId]);
  return (
    <div className='Chatbody'>
      {messages?.map((message) => (
        <div className={`chat__message ${ message.name === user.displayName && `chat__reciever`}`}>
          {message.message}
        </div>
      ))}

{/*         
        <div className={`chat__message ${ false && `chat__reciever`}`}>
          message sent
        </div>
        <div className={`chat__message ${ true && `chat__reciever`}`}>
          message chat__reciever
        </div> */}
    </div>
  )
}

export default Chatbody;