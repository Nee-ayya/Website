import React from 'react';
import '../App.css';
import Main from '../Components/Main';
import Cards from '../Components/Homepage/Cards';
import Footer from '../Components/Homepage/Footer';

function Home() {
    return (
        <>
            <Main />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;