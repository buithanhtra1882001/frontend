import { useState, useEffect } from 'react'
import './Conversation.css'
import axios from 'axios';
import {useDispatch, useSelector}  from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { fetchConversationData, selectConversation } from '../../features/conversationSlice';

function Conversation() {
    
    const { user: currentUser } = useSelector((state) => state.auth);
    const channels = useSelector(selectConversation)
    let navigate = useNavigate()
    useEffect(() => {
      if (!currentUser) {
        navigate('/login')
      }
    },[currentUser])
    const conversation = useSelector(selectConversation)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchConversationData())
    }, [dispatch])

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const friendId = conversation.user.find((m) => m !== currentUser._id);
    //     const getUser = async () => {
    //         try {
    //             const res = await axios("/users?userId=" + friendId);
    //             setUser(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getUser([currentUser, conversation]);
    // }, []);

    return (
        <div className="conversation">
            <img className="conversationImg" src="" alt="" />
            <span className="conversationName">{currentUser.username}</span>
        </div>
    )
}

export default Conversation