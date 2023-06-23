import './App.css';
import Sidebar from './Sidebar';
import ActualChat from './ActualChat.js';
import React, { useState } from 'react';
// ,{ Component }  ,{ useEffect,useState }
// import { Switch } from '@mui/material';
// import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
// import db from './firebase';

function App () {
  // const [user,setUser] = useState(null);
  const [{ user },dispatch] = useStateValue();

  

  // const [rooms,setRooms] = useState([]);
  // useEffect(()=>{
  //   const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=>
  //   setRooms(
  //     snapshot.docs.map((doc)=>({
  //       id: doc.id,
  //       data: doc.data(),
  //     }))
  //   ));
  //   return ()=>{
  //     unsubscribe();
  //   };
  // },[])
  // const { roomId } = useParams();
  // render() {
    return (
      <div className="app">
        {!user?(
          <Login />
        ):(
          <div className="app__body">          
          <Router>
            <Routes>
              <Route path="/rooms/:roomId" element={[<Sidebar />,<ActualChat />]}>
              </Route>
              <Route path="/" element={[<Sidebar />]}>
              </Route>
            </Routes>
          </Router>
        </div>
        )}
      </div>
    );
  }
  
// }
export default App;
// Tech in this build

// React 
// Firebase Firestore Realtime DB
// Material UI
// React Router
// React Context API
// REDUX
// Google Authentication
// Deploy using Firebase!