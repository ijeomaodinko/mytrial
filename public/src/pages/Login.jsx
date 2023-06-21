import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/logo.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes';

const Login = () => {
  const navigate = useNavigate();
   const [values, setValues] = useState({
    username: "",
    password: "",
   });
const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
}

useEffect(() => {
    if(localStorage.getItem('chat-app-user')){
        navigate('/')
    }
}, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
       if  (handleValidation()){
        const { password, username } = values;
        const { data } = await axios.post(loginRoute, {
          username,
          email, 
          password,
        });
        if(data.status === false){
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem('chat-app-user', JSON.stringify(data.user));
          navigate("/");
        }
      }
    };
    const handleValidation = () => {
      const { password,  username } = values;
      if( password === ""){
        toast.error("Email and password required", toastOptions 
        );
        return false
      }else if (username.length === ""){
        toast.error("Email and password required", toastOption);
      }
      return true;
    };
    const handleChange =(event) => { 
      setValues ({...values, [event.target.name]: event.target.value});
    };
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
            onChange={(e) => handleChange(e)}  min="3" />
            <input type='password' placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
       <button type="submit">Login</button>
       <span>You don't have account ?<Link to = "/register"> Register </Link> 
       </span>      
       </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

export default Login


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
