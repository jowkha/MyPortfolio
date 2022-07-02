import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Profile from '../pages/Profile';
// import Experience from './pages/Experience';
// import Projects from './pages/Projects';
// import ReorderIcon from '@material-ui/icons/reorder';

function Navbar() {

    return (
        <nav className='navbar'>
            <NavLink className='navbar-portfolio' to='/'>
                Portfolio
            </NavLink>
            {/* <div className='links'>
                <Link to='/'>Profile</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div> */}
            <button classname='navbar-toggler' type='button' data-toggle='collapse' 
            data-target='#navbarSupportedContent' aria-expaned='false' aria-label='Toggle Navigation'>
                <i classname='fas far-bars text-white '></i>
            </button>

            <div classname='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-alto'>

                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>

                    <li className='nav-item active'>
                        <NavLink className='nav-link' to='/'>
                            <i className='fas-fa-tachometer-alt'>
                                Profile
                            </i>
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/projects'>
                            <i className='fas-fa-address-book'>
                                Projects
                            </i>
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/experience'>
                            <i className='fas-fa-clone'>
                                Experience
                            </i>
                        </NavLink>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar