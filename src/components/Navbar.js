import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Profile from '../pages/Profile';
// import Experience from './pages/Experience';
// import Projects from './pages/Projects';
// import ReorderIcon from '@material-ui/icons/reorder';
import $ from 'jquery';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className='links'>
                <Link to='/'>Profile</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </nav>
    )
}

export default Navbar