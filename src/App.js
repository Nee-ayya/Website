import React from 'react'
import Homebar from './Components/homebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Services from './pages/Services';
import Products from './pages/Product';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Homebar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path='/Services' element={ <Services /> } />
          <Route path='/Product' element={ <Products /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/signin' element={ <SignIn /> } />
        </Routes>
      </Router>
    </>

  );
}

export default App;
