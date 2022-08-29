import React, { useContext, useState } from 'react'
import { SlideContext } from '../../SlideContext';
import { useNavigate } from "react-router-dom";
import { useSwiper } from 'swiper/react';
import burger from '../../menu/icons/menu.png';
import useItems from '../../menu/itemLists/itemList';
import backBtn from '../../menu/icons/back.png'
import './Header.css';
import wildLogo from "../../menu/images/wild-logo.png"
export default function Header(props) {

    const swiper = useSwiper();

    const [showMenu, setShowMenu] = useState(false);
    const {slide, setSlide} = useContext(SlideContext);
     const navigate = useNavigate();
    const location = props.locationPath.slice(1);
    //console.log(useItems)
    return (
        <div className='header'>
            <div className='menu'>
            <div className ='backBtnDiv'>
                <img src={backBtn} alt='back button' onClick={() => navigate(-1)} style={{filter: 'invert(100%', width: '30px'}}/>
            </div>
                <div className='logoDiv'>
                    <img className='logo' src={wildLogo} alt="wild logo" onClick={() => navigate("/")}/>
                </div>
                <div className='burger' onClick={() => setShowMenu(!showMenu)}>
                    <img src={burger} style={{filter: 'invert(100%', width: '30px'}} />
                </div>
            </div>
            <div className='full-menu' style={(showMenu ? {display: 'block', height: "100%"} : {display: 'none', height: 0})}>
                {useItems()[location].map((item, index)=>{
                return<>
                    <p key={index} onClick={() => {
                        setShowMenu(!showMenu);
                        setSlide(index);
                        }}>{item.name}</p>
                </>
        })}
            </div>
        </div>
    )
}
