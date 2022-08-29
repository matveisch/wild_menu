import React, { useContext, useEffect, useRef, useState } from "react";

import DrinkInfo from "./drinkInfo";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./mainMenu.css"
import { SlideContext } from "../SlideContext";

function TopSlider (props){
    const {slide, setSlide} = useContext(SlideContext);
    
    const swiperRef = useRef();

    useEffect(() => {
      swiperRef.current.slideTo(slide + 3);
    }, [slide])

    // if (!showMenu) {
      return(
      <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          className="mySwiper mainSwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => console.log(swiper.realIndex)}
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
