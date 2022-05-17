import React, {useContext, useEffect, useState} from 'react'
import Server from '../server/Server'
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector} from "react-redux";
import { Avatar } from '@mui/material'
import Conversation from '../conversations/Conversation'
import './Home.css'
import Message from '../chat/message/Message';
import axios from 'axios';
import {io} from 'socket.io-client'
function Home() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [conversations,setConversations] = useState([]);
  const [currentChat,setCurrentChat] = useState(null);
  const [messages,setMessages] = useState([]);
  const [newMessage,setNewMessage] = useState("");
  const [socket,setSocket] = useState("");
  let navigate = useNavigate()
  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  },[currentUser])

  useEffect(() => {
    setSocket(io('ws://localhost:8900'))
  },[]) 
  return (
    <>
      <div className='home'>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search" className="chatMenuInput" />
            {conversations.map((c) =>(
              <Conversation conversations={c} currentUser={currentUser} />
            ))}
            
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true}/>
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea className="chatMessageInput" placeholder="write something..."></textarea>
              <button className="chatSubmitButtom">Send</button>
            </div>
          </div>
        </div>
        <div className="chatActive">
          <div className="chatActiveWrapper">
            Online
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
