import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homebar from './Components/homebar';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Product';
import SignUpPage from './pages/Sign-up/page.tsx';
import Signin from './pages/login/page.tsx';

function App() {
  return (
    <>
      <Router>
        <Homebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Products />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
