import React, { useContext, useRef, useState } from "react";

import DrinkInfo from "./drinkInfo";

import { Swiper, SwiperSlide, useSwiper  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./mainMenu.css"
import { SlideContext } from "../SlideContext";

function TopSlider (props){
    const {slide, setSlide} = useContext(SlideContext);
    const swiper = useSwiper();
    // if (!showMenu) {
      return(
      <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          className="mySwiper mainSwiper"
          onSlideChange={(slide) => console.log('slide change', slide)}
        >
        {props.itemsList.map((item, index)=>{
          return (
          <SwiperSlide key={index}>
            <p className="itemName">{item.name}</p>
            <div className="itemInfo">
              <DrinkInfo  items={item.items}/>
            </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
        )
    }
// }

export default TopSlider;
