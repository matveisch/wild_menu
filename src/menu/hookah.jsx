import React, { useRef, useState } from "react";

import TopSlider from "./topSlider";

import useHookah from "./itemLists/hookahItems";

import "./drinks.css"

function Hookah(){

  const hookahList = useHookah()

    return(<div className="drinkWraper">
    <TopSlider itemsList={hookahList} />
    </div>)
}
export default Hookah;