import React from 'react';
import './Header.css';
import Logo from '../images/Antibody.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='header_logo'>
                <Link to='/'><IconButton><img src={Logo} alt='Elitem Logo'/></IconButton></Link>
            </div>
            <h1>Elitem</h1>
            <div className='header_icon'>
                <Link to= '/portal'><IconButton><MenuRoundedIcon className='header_iconInner'/></IconButton></Link>
            </div>
        </div>
    )
}

export default Header;
