import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };
    const handleChange =(event) => {};
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className='brand'>
                <img src="Logo"  alt="Logo" />
                <h1>MiChat</h1>
            </div>
            <input 
            type="text" 
            placeholder="Username"
            name="username" 
            onChange={(e) => handleChange(e)} />
            <input type='email' placeholder="Email"  name="email" onChange={(e) => handleChange(e)} />
            <input type='password' placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
            <input type='confirm password' placeholder='Confirm Password' name='confirm password' onChange={(e) => handleChange(e)} />
       <button type="submit">Create User </button>
       <span>Already have a account ? <Link to = "/login"> Login </Link> 
       </span>      
       </form>
      </FormContainer>
    </>
  )
}

export default Register


const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1;
`;
