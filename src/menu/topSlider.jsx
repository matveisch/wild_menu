import React, { useContext, useRef, useState } from "react";

import DrinkInfo from "./drinkInfo";

import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./drinks.css"
import { MenuContext } from "../MenuContext";

function TopSlider (props){
    const {showMenu, setShowMenu} = useContext(MenuContext);

    if (!showMenu) {
      return(
      <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          className="mySwiper drinkSwiper"
        >
        {props.itemsList.map((drinkItem, index)=>{
          return <SwiperSlide key={index}>
            <p className="drinkName">{drinkItem.name}</p>
            <div className="drinkInfo">
              <DrinkInfo  items={drinkItem.items}/>
            </div>
          </SwiperSlide>
        })}
        </Swiper>
        )
    }
}
export default TopSlider;
