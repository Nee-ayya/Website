import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homebar.css';
import { Button } from './button';
import { useAuth } from './Authentication/AuthContext'; // Import useAuth hook

function Homebar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const { currentUser } = useAuth();

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

    // Helper function to extract the username from email
    const extractUsername = (email) => {
        if (email) {
            const name = email.split('@')[0]
            if (name.includes('.')) {
                return name.split('.')[0]
            } 
            return name;
        } else {
            return '';
        }
    };
    

    return(
        <nav className="Homebar">
            <div className="Homebar-container">
                <Link to='/' className='homebar-logo'>
                    <i className="fas fa-user-astronaut"></i> Jai Balayya
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
                            Games
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Product' className='nav-links' onClick={ closeMobileMenu }>
                            Product
                        </Link>
                    </li>
                </ul>
                {currentUser ? (
                        <div className='Homebar-container'>
                            {/* <li className='nav-items'> */}
                                <Link to='/profile' className='nav-links' onClick={ closeMobileMenu }>
                                    Hello, { extractUsername(currentUser.email) }
                                </Link>
                            {/* </li> */}
                        </div>
                            
                ) : (
                    <div>
                        {button && 
                            (<Link to='login'>
                                <Button buttonStyle='btn--outline'>SIGN UP / SIGN IN</Button>
                            </Link>)
                        }
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default Homebar