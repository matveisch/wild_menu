import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function useDrink(){

  const {language, setLanguage} = useContext(LanguageContext);

const drinkListEng = [{name: "Non-Alcoholic", items:[
    {itemName: "Coca-Cola", imageURL: "https://bit.ly/3zJ0ami", description: "very nice and very tasty shit", price: 15},
    {itemName: "Juice", imageURL: "https://bit.ly/3zJ0ami", description: "very nice and very tasty shit", price: 10},
    {itemName: "Cocktail", imageURL: "https://bit.ly/3zJ0ami", description: "very nice and very tasty shit", price: 20}]},
    {name: "Vodka", items:[
    {itemName: "Van Gogh", imageURL: "", description: "", price: 10},
    {itemName: "Stolichnaya", imageURL: "", description: "", price: 10},
    {itemName: "Absolut", imageURL: "", description: "", price: 10}]},
  {name: "Whiskey", items: [
    {itemName: "Jack Daniel's", imageURL: "https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png" , description: "40% ALC", price: "15"},
    {itemName: "Bushmills", imageURL: "https://www.bushmills.eu/wp-content/themes/bushmills/dist/images/logo.png", description: "", price: 10},
    {itemName: "Grant's", imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2021%2F04%2FGrants-Logo.png&f=1&nofb=1", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whiskyminibottles.eu%2FContent%2FLogos%2FDalmore.png&f=1&nofb=1", description: "", price: 25}]},
  {name: "Beer", items: [
    {itemName: "Budweiser", imageURL: "https://bit.ly/3vVtxkq", description: "", price: "15/20"},
    {itemName: "Edelweiss", imageURL: "https://bit.ly/3QtO47y", description: "", price: "15/20"},
    {itemName: "Barbãr Blonde", imageURL: "https://bit.ly/3AgpSjH", description: "", price: "20/25"},
    {itemName: "Kasteel Rogue", imageURL: "https://bit.ly/3BZl834", description: "", price: "20/25"},
    {itemName: "Trippel", imageURL: "", description: "", price: "20/25"},
    {itemName: "Kozel Dark", imageURL: "", description: "", price: "20/25"},
    {itemName: "Liefmans", imageURL: "", description: "", price: "20/25"},
    {itemName: "Shevet", imageURL: "", description: "", price: "20/25"}]},
  {name: "Tequila", items: [
    {itemName: "Jose Cuervo", imageURL: "", description: "", price: 10}]},
  {name: "Gin", items: [
    {itemName: "Gordon's", imageURL: "", description: "", price: 10},
    {itemName: "Bombay", imageURL: "", description: "", price: 10}]},
  {name: "Liquor", items: [
    {itemName: "Jägermeister", imageURL: "", description: "", price: 10},
    {itemName: "Tubi 60", imageURL: "", description: "", price: 10}]},
  {name: "Arak", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
  {name: "Rum", items: [
    {itemName: "Bacardi", imageURL: "", description: "", price: 10},
    {itemName: "Captain Morgan", imageURL: "", description: "", price: 10}]},
  {name: "Absinthe", items: [
    {itemName: "Xenta", imageURL: "", description: "", price: 25}]}];

    const drinkListRus = [{name: "Водка", items:[
    {itemName: "Van Gogh", imageURL: "", description: "", price: 10},
    {itemName: "Kosher for Passover", imageURL: "", description: "", price: 10}]},
  {name: "Виски", items: [
    {itemName: "Jack Daniel's", imageURL: "" , description: "", price: 15},
    {itemName: "Bushmills", imageURL: "", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "", description: "", price: 25}]},
  {name: "Пиво", items: [
    {itemName: "Kasteel Rogue", imageURL: "", description: "", price: 25},
    {itemName: "Kozel", imageURL: "", description: "", price: 25},
    {itemName: "Budweiser", imageURL: "", description: "", price: 25},
    {itemName: "Corona Extra", imageURL: "", description: "", price: 25}]},
  {name: "Текила", items: [
    {itemName: "Jose Cuervo", imageURL: "", description: "", price: 10}]},
  {name: "Ликеры", items: [
    {itemName: "Jägermeister", imageURL: "", description: "", price: 10},
    {itemName: "Tubi 60", imageURL: "", description: "", price: 10}]},
  {name: "Арак", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
  {name: "Ром", items: [
    {itemName: "Captain Morgan", imageURL: "", description: "", price: 10}]},
  {name: "Абсент", items: [
    {itemName: "Sauvage", imageURL: "", description: "", price: 25}]}];

    const drinkListHeb = [{name: "וודקה", items:[
    {itemName: "Van Gogh", imageURL: "", description: "", price: 10},
    {itemName: "Kosher for Passover", imageURL: "", description: "", price: 10}]},
  {name: "ויסקי", items: [
    {itemName: "Jack Daniel's", imageURL: "" , description: "", price: 15},
    {itemName: "Bushmills", imageURL: "", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "", description: "", price: 25}]},
  {name: "בירה", items: [
    {itemName: "Kasteel Rogue", imageURL: "", description: "", price: 25},
    {itemName: "Kozel", imageURL: "", description: "", price: 25},
    {itemName: "Budweiser", imageURL: "", description: "", price: 25},
    {itemName: "Corona Extra", imageURL: "", description: "", price: 25}]},
  {name: "טקילה", items: [
    {itemName: "Jose Cuervo", imageURL: "", description: "", price: 10}]},
  {name: "ליקר", items: [
    {itemName: "Jägermeister", imageURL: "", description: "", price: 10},
    {itemName: "Tubi 60", imageURL: "", description: "", price: 10}]},
  {name: "ערק", items: [
    {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
  {name: "רום", items: [
    {itemName: "Captain Morgan", imageURL: "", description: "", price: 10}]},
  {name: "אבסינת", items: [
    {itemName: "Sauvage", imageURL: "", description: "", price: 25}]}];


  const drinkList = [];

  switch (language){
    case 0:
      return [...drinkListRus]
      console.log("drink rus")
      break;
      case 2: 
      return [...drinkListHeb]
      console.log("drink heb")
      break;
      default:
      return [...drinkListEng];
      console.log("drink eng+def")
      break;
  }

  // return drinkList;
}
