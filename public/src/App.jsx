import React from 'react';
import { BrowserRouter, Routes,  Route }from 'react-router-dom';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/" element={<Chat />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
