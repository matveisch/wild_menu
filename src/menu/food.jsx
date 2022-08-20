import React, { useRef, useState } from "react";

import useFood from "./itemLists/foodItems";

import TopSlider from "./topSlider";

import "./drinks.css"

function Food(){

  const foodList = useFood();

    return(
      <div>
        <div className="drinkWraper">
          <TopSlider itemsList={foodList} />
        </div>
      </div>
    )
}
export default Food;