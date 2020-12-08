import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../navbar/Navbar.css'
import TopBanner from '../top-banner/TopBanner'


 function Navbar() {
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <div>
         
          <TopBanner/>  
         <hr/>  
       <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GUIDE
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/news'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                news
              </NavLink>
            </li>
            
            <li className='nav-item'>
              <NavLink
                to='/contact'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                contacts
              </NavLink>
            </li>

            
          </ul>
          
        </div>
      </nav>
        </div>
    )
}

export default Navbar