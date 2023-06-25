import React from 'react';
import styled from "styled-components";
import Robot from "../assets/robot.gif";
const Welcome = ({ currentUser }) => {
  return (
    <div>
      <Container>
        <img src={Robot} alt ="Robot" />
        <h1>
        Welcome, <span>{currentUser.username}</span>
        </h1>
            <h3>Please select a chat to Start Messaging.</h3>
      </Container>
    </div>
  );
}

export default Welcome

const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: 
`;