import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function useMenu(){

  const {language, setLanguage} = useContext(LanguageContext);

const menuItemsEng = ["Drink", "Food", "Hookah"];
const menuItemsRus = ["Напитки", "Еда", "Кальян"];
const menuItemsHeb = ["שתייה", "אוכל", "נרגילה"];




  switch (language){
    case 0:
      return [...menuItemsRus]
      console.log("drink rus")
      break;
      case 2: 
      return [...menuItemsHeb]
      console.log("drink heb")
      break;
      default:
      return [...menuItemsEng];
      console.log("food eng+def")
      break;
  }


}
