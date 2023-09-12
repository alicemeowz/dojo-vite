import './App.css'
import React from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './services/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';




const App = () => {
  initializeApp(firebaseConfig);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
