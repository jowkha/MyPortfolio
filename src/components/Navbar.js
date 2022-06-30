import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
// import ReorderIcon from '@material-ui/icons/reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button 
                 onClick={() => {
                    setExpandNavbar((prev) => !prev);
                 }}
                >
                    {/* {''}
                    <ReorderIcon /> */}
                </button>
            </div>
            <div className='links'>
                <Link to='/'>Profile</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>experience</Link>
            </div>
        </div>
    )
}

export default Navbar