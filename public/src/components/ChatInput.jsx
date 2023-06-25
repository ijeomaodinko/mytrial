import React from 'react';
import styled from 'styled-components';
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useActionData } from 'react-router-dom';


const ChatInput = () => {
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
        <form className='input-container'>
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
        height: 60%;
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
        svg{
            font-size: 2rem;
            color: white;
        }


    }
}
`;