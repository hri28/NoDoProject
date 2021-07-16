import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);

    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> 
                  NoDo <br />
                <i className='far fa-clone' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    home.
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/ab'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    about us.
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/login1'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    login.
                  </Link>
                </li>
                
              </ul>
             <Button buttonStyle='btn--outline'><Link to='/form' style={{textDecoration:"none", color:"white"}}>SIGN UP</Link></Button>
            </div>
          </nav>
        </>
      );
}

export default Navbar
