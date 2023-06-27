import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import axios from axios;
import { useNavigate } from 'react-router-dom';
import Contacts from '../components/Contacts';

const Chat = () => {
    const navigate = useNavigate();
    const [contacts, setContacts ] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(async() => {
        if(!localStorage.getItem("chat-app-user")){
            navigate("/login");
        }else {
            setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
            setIsLoaded(true);
        }
    }, []);
    useEffect(async () => {
        if (currentUser){
            if(currentUser.isAvatarImageSet){
                const data = await axios.get(`${allUserRoute}/${currentUser._id}`)
                setContacts(data.data);
            } else {
                navigate("/setImage");
            }
        }
    }, [currentUser]);
const handleChatChange = (chat) => {
setCurrentChat(chat);
}

  return (
      <Container>
    <div className='container'>
    <Contacts contacts={contacts}  currentUser={currentUser} changeChat ={handleChatChange} />
     { isLoaded && currentChat === undefined ? (
      <Welcome    currentUser={currentUser} />
     ): (
        <ChatContainer currentUser={currentUser} currentUser={currentUser}  />
     )}
    </div>
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items; center;
background-color: #131324;
.container {
    height: 85vh;
    width: 85vw;
    background-color: #0000;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080){
        grid-template-columns: 35% 65%;
    }
}

`;

export default Chat
