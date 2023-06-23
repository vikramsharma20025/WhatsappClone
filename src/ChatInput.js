import React, {  useState } from 'react';
// useEffect,
import './ChatInput.css';
// import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/MicSharp';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import firebase from 'firebase/compat/app';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';

function ChatInput({roomName}) {
  const [{ user },dispatch] = useStateValue();
  const { roomId } = useParams();
  const [input,setInput] = useState("");
  const sendMessage=(e)=>{
    e.preventDefault();
    console.log("You typed >>>",input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      message:input,
      name:user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className='ChatInput'>
        {/* <EmojiEmotionsOutlinedIcon /> */}
        <InsertEmoticonIcon />
        <AttachFileOutlinedIcon />
        <div className='Input'>
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type='text' placeholder='Type a Message'/>
            <button onClick={sendMessage}>Send a message</button>
          </form>
        </div>
        
        <MicIcon />
    </div>
  );
}

export default ChatInput;