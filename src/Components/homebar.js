import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homebar.css';
import { Button } from './button';

function Homebar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //function below doesnt show additional buttons if window is shrunk
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <nav className="Homebar">
            <div className="Homebar-container">
                <Link to='/' className='homebar-logo'>
                    <i className="fas fa-user-astronaut"></i> Portfolio
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={ closeMobileMenu }>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='../Services' className='nav-links' onClick={ closeMobileMenu }>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Product' className='nav-links' onClick={ closeMobileMenu }>
                            Product
                        </Link>
                    </li>
                </ul>
                {button && (<Link to='login'><Button buttonStyle='btn--outline'>SIGN UP / SIGN IN</Button></Link>)}
            </div>
        </nav>
    )
}

export default Homebar