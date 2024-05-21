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
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    )
}

export default Homebar

/*import React from 'react';
import { Link } from 'react-router-dom';
import './homebar.css';
import Button from './Button'; // Ensure you import the Button component correctly

function Homebar() {
  return (
    <nav className='Homebar'>
      <div className='Homebar-container'>
        <Link to='/' className='homebar-logo'>
          <i className='fas fa-typo3' />
          Portfolio
        </Link>
        <div className='menu-icon'>
          <i className='fas fa-bars' />
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links'>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links'>
              Product
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile'>
              Sign Up
            </Link>
          </li>
        </ul>
        {/* Add Button with Link for Sign Up }
        <Link to='/signup' className='nav-links'>
          <Button buttonStyle='btn--outline'>SIGN UP</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Homebar;
 */