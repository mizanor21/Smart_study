import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <img src={logo} alt="" />
            <h1><span style={{ color: '#004D88' }}>Smart</span> <span style={{ color: 'green' }}>Study</span></h1>
        </div>
    );
};

export default Header;