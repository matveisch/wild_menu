import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function useHookah(){

  const {language, setLanguage} = useContext(LanguageContext);

const hookahListEng = [{name: "Light", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "", price: 10},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", description: "", price: 10},
    {itemName: "Pink Jam", imageURL: "", description: "", price: 10},
    {itemName: "Grape Britain", imageURL: "", description: "", price: 10},
    {itemName: "Watermelody", imageURL: "", description: "", price: 10},
    {itemName: "Blueberry Mint", imageURL: "", description: "", price: 10},
    {itemName: "Forest Berry", imageURL: "", description: "", price: 10},
    {itemName: "Fruit Ninja", imageURL: "", description: "", price: 10},
    {itemName: "Citrus Boom", imageURL: "", description: "", price: 10},
    {itemName: "Berrytale", imageURL: "", description: "", price: 10},
    {itemName: "Thai Mango", imageURL: "", description: "", price: 10},
    {itemName: "Amazingreen", imageURL: "", description: "", price: 10}]},
    {name: "Medium", items:[
    {itemName: "Pinkman", imageURL: "", description: "", price: 10},
    {itemName: "Pineapple Rings", imageURL: "", description: "", price: 10},
    {itemName: "Tropic Juice", imageURL: "", description: "", price: 10},
    {itemName: "Orange Team", imageURL: "", description: "", price: 10},
    {itemName: "Ice Cream", imageURL: "", description: "", price: 10}]},
    {name: "Heavy", items:[
    {itemName: "Red Orange", imageURL: "", description: "", price: 10},
    {itemName: "Chupa Graper", imageURL: "", description: "", price: 10},
    {itemName: "Apple shock", imageURL: "", description: "", price: 10},
    {itemName: "Ice Baby", imageURL: "", description: "", price: 10},
    {itemName: "Brownie", imageURL: "", description: "", price: 10}]}
  ];
const hookahListRus = [{name: "Light", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "Зеленый чай, ромашка и спелое манго", price: 10},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", 
    description: "Лимонные вафли с нежной начинкой из ванильного крема", price: 10},
    {itemName: "Pink Jam", imageURL: "", 
    description: "Яркие цитрусовые ноты розового грейпфрута, подчеркнутые ароматом спелой клубники и малинового джема", price: 10},
    {itemName: "Grape Britain", description: "Виноград с нотками свежести", imageURL: "", price: 10},
    {itemName: "Watermelody", description: "Арбуз и дыня со свежестью", imageURL: "", price: 10},
    {itemName: "Blueberry Mint", description: "Черника в сочетании с нежной мятой", imageURL: "", price: 10},
    {itemName: "Forest Berry", description: "Смесь ягод из сочетания ароматов красной малины, ежевики и клубники", imageURL: "", price: 10},
    {itemName: "Fruit Ninja", description: "Ананас доминирует широкий спектр фруктов, таких как кийи, персик, маракуя и множество других", imageURL: "", price: 10},
    {itemName: "Citrus Boom", description: "Грейпфрут и сладкое помело", imageURL: "", price: 10},
    {itemName: "Berrytale", description: "Лесные ягоды", imageURL: "", price: 10},
    {itemName: "Thai Mango", description: "Сладкий вкусный манго с травянистым оттенком", imageURL: "", price: 10},
    {itemName: "Amazingreen", description: "Зеленые ягоды с легкой прохладой", imageURL: "", price: 10}]},
    {name: "Medium", items:[
    {itemName: "Pinkman", description: "Кисло-сладкое сочетание розового грейпфрута и клубники, приправленное малиновым сиропом", imageURL: "", price: 10},
    {itemName: "Pineapple Rings", description: "Сочный ананас", imageURL: "", price: 10},
    {itemName: "Tropic Juice", description: "Необычайно богатая смесь ароматов ананаса и экзотической маракуйи", imageURL: "", price: 10},
    {itemName: "Orange Team", description: "Кисло-сладкое сочетание апельсина и мандарина", imageURL: "", price: 10},
    {itemName: "Ice Cream", description: "Ванильное мороженое", imageURL: "", price: 10}]},
    {name: "Heavy", items:[
    {itemName: "Red Orange", imageURL: "", description: "Насыщенный апельсин в сочетании с кислыми и сладкими нотами", price: 10},
    {itemName: "Chupa Graper", imageURL: "", description: "Виноградный Чупа-Чупс", price: 10},
    {itemName: "Apple shock", imageURL: "", description: "Освежающее спелое зеленое яблоко с великолепной кислотой", price: 10},
    {itemName: "Ice Baby", imageURL: "", description: "Освежающий ягодный сорбет с цитрусовым послевкусием", price: 10},
    {itemName: "Brownie", imageURL: "", description: "Нежное шоколадное печенье", price: 10}]}
  ];
const hookahListHeb = [{name: "Light", items:[
    {itemName: "Barbeque", imageURL: "", description: "", price: 10}]},
    {name: "Medium", items:[
    {itemName: "Barbeque", imageURL: "", description: "", price: 10}]},
    {name: "Heavy", items:[
    {itemName: "Barbeque", imageURL: "", description: "", price: 10}]}];



  switch (language){
    case 0:
      return [...hookahListRus]
      console.log("drink rus")
      break;
      case 2: 
      return [...hookahListHeb]
      console.log("drink heb")
      break;
      default:
      return [...hookahListEng];
      console.log("food eng+def")
      break;
  }


}
