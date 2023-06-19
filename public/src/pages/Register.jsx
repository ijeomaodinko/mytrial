import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Logo from '../assets/logo.png';

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
                <img src=""  alt="Logo" />
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
align-items: center;
background-color: #131324;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #0000070;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4ef;
      color: #fff;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #1ee;
        outline: none;
      }
    }
    button {
      background-color: #997af;
      color: #fff;
      padding: 1rem 2rem;
      border: none;
      font-weigth: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
  span {
    color: white;
    text-transfrom: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weigth: bold;
    }
  }
  }
`;
