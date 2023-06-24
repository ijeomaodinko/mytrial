import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "../assets.logo";

const Contacts = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(() => {
        if(currentUser){
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);
    const changeCurrentChat = (index, contact) => {};

  return (
    <div>
    {currentUserImage && currentUserName && (

    <Container>
    <div className='brand'>
        <img src={logo} alt="logo" />
        <h3>MiChat</h3>
    </div>
    <div className='contacts'>
        {
            contacts.map((contact, index) =>{
                return (
                    <div className={`contact ${index === currentSelected ? "selected" :""}`} key={index}>
                   <div className='avatar'>
                   <img  src={`data:image/svg+xml; based64, ${contact.avatar}`} alt='avatar' />
                    </div>
                    <div className='username'> 
                    <h3>{contact.username}</h3>
                    </div>
                    </div>
                );
            })
        }
    </div>
    <div className='current-user'>
        <div className='avatar'>
        <img  src={`data:image/svg+xml; based64, ${contact.avatar}`} alt='avatar' />
                    </div>
                    <div className='username'> 
                    <h3>{contact.username}</h3>
                    </div>
    </div>

    </Container>
      
     )}
    </div>
  )
}

export default Contacts
