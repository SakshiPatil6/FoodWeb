import logo from '../images/logo.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import '../WebPage1.css';
import React, { useState } from 'react';
import Search from '../search/search';

export default function WebPage1(props) {
    const [showIcon, setShowIcon] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const menubarClick = () => {
        setShowIcon(!showIcon);
    }

    const searchClick = () => {
        setShowSearch(!showSearch);
    }

    return (
        <>
            <div className='header'>
                <img src={logo} className='navbar-brand logo' alt='logo' />
                <nav className={`navbar1 ${showIcon ? 'active' : ''}`}>
                    <a href="#" className='a active'>{props.menu1}</a>
                    <a href="#dishes" className='a'>{props.menu2}</a>
                    <a href='#about' className='a'>{props.menu3}</a>
                    <a href='#menu' className='a'>{props.menu4}</a>
                    <a href='#orders' className='a'>{props.menu5}</a>
                </nav>

                <div className='icons'>
                    <FontAwesomeIcon className='i menubar' icon="fa-solid fa-bars" size='2xs' id='bars' onClick={menubarClick} />
                    <FontAwesomeIcon className='i' icon="fas fa-search" id='search' onClick={searchClick} />
                    <FontAwesomeIcon className='i' icon="fa-solid fa-heart" />
                    <FontAwesomeIcon className='i' icon="fa-solid fa-cart-shopping" />
                </div>
            </div>
            {showSearch && <Search />}
        </>
    );
}
