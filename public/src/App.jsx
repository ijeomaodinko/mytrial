import React from 'react';
import { BrowserRouter, Routes,  Route }from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import SetImage from './pages/SetImage';
import Chat from './pages/Chat';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setimage" element={<SetImage />} />
      <Route path="/" element={<Chat />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
