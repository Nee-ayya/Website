import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homebar from './Components/homebar';
import './App.css';
import Home from './pages/Home.js';
import Services from './pages/Services';
import Products from './pages/Product';
import SignUp from './pages/Signup/Signup';
import SignIn from './pages/Signin/Signin';

function App() {
  return (
    <>
      <Router>
        <Homebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
