import React, { useContext, useState } from 'react'
import { MenuContext } from '../../MenuContext';
import burger from '../../menu/icons/menu.png';
import './Header.css';

export default function Header() {
    const {showMenu, setShowMenu} = useContext(MenuContext);

    return (
        <div className='header'>
            <div className='menu'>
                <div className='logo'>
                    logo
                </div>
                <div className='burger' onClick={() => setShowMenu(!showMenu)}>
                    <img src={burger} style={{filter: 'invert(100%', width: '30px'}}/>
                </div>
            </div>
            <div className='full-menu' style={showMenu ? {display: 'block'} : {display: 'none'}}>
                full-menu
            </div>
        </div>
    )
}
