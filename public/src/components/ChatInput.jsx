import React from 'react';
import styled from 'styled-components';
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useActionData } from 'react-router-dom';


const ChatInput = (handleSendMsg) => {
 const [showEmojiPicker, setShowEmojiPicker] = useState(false);
 const [msg, setmsg] = useState("");

 const handleEmjoiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
 };

 const handleEmojiClick = (event, emoji) =>{
    let message = msg;
    message += emoji.emoji;
    setMsg(message);
 };

 const sendChat = (event) => {
    event.preventDefault();
    if(msg.length > 0){
     handelSendMsg(msg);   
     setMsg('')
    }
 }
  return (
    <Container>
        <div className='button-container'>
            <div className='emoji'>
            <BsEmojiSmileFill  onClick = {handleEmjoiPickerHideShow} />
            {
                showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
            }
            </div>
        </div>
        <form className='input-container' onSubmit = {(e) => sendChat(e)}>
        <input type="text" placeholder="type your message here" value={msg} onChange = {(e) => setMsg(e.target.value)}  />
        <button className='submit'>
            <IoMdSend />
        </button>
        </form>
    </Container>
  )
}

export default ChatInput

const Container = styled.div `
display: grid;
grid-template-column: 5% 10%;
align-items: center;
background-color: #080ef1;
padding: 0 2 rem;
padding-bottom: 0.3rem;
@media and screen (min-width: 720px) && (max-width: 1080px){
    padding: 0 1rem;
    gap: 1rem;
}
.button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
        position: relative;
        svg {
            font-size: 1.5rem;
            color: #ffff00c8;
            cursor: pointer;
        }
        .emoji-picker-react {
            position: absolute;
            top: -350px;
            background-color: #080420;
            box-shadow: 0 5px 9px #9a86f3;
            border-color: #9186f3;
            .emoji-scroll-wrapper:: -webkit-scrollbar {
                background-color: #080420;
                width: 5px;
            &-thumb {|
            background-color: #9a86f3;
            }

            }
            .emoji-categories {
                button {
                    filter: contrast(0);
                }
            } 
            .emoji-search {
                background-color: transparent;
                border-color: #9186f3;
            }
            .emoji-group:before {
                background-color: #080420;
            }
        }
    }
}
.input-container {
    width: 90%;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    gap: 2rem;
    background-color: #fffffff039;
    input {
        width: 90%;
        background-color: transparent;
        color: white;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;
        &::selection {;
            background-color: #96;
        }
        &:focus {
            outline: none;
        }
    }
    button {
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #9a86f3;
        border: none;
    @media screen and (min-width: 720px) and (max-width: 1080px){
        padding: 0.3rem 1rem;
        svg {
            font-size: 1rem;
        }
    }
        svg{
            font-size: 2rem;
            color: white;
        }


    }
}
`;