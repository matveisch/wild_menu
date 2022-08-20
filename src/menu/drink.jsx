import React, { useRef, useState } from "react";

import useDrink from "./itemLists/drinkItems";

import TopSlider from "./topSlider";

import "./drinks.css"

function Drink(){
  const drinkList = useDrink()
  console.log(drinkList)
    // const drinkList = [{name: "Vodka", items:[
    //   {itemName: "Van Gogh", imageURL: "", description: "", price: 10},
    //   {itemName: "Kosher for Passover", imageURL: "", description: "", price: 10}]},
    // {name: "Whiskey", items: [
    //   {itemName: "Jack Daniel's", imageURL: "" , description: "", price: 15},
    //   {itemName: "Bushmills", imageURL: "", description: "", price: 10},
    //   {itemName: "Dalmore", imageURL: "", description: "", price: 25}]},
    // {name: "Beer", items: [
    //   {itemName: "Kasteel Rogue", imageURL: "", description: "", price: 25},
    //   {itemName: "Kozel", imageURL: "", description: "", price: 25},
    //   {itemName: "Budweiser", imageURL: "", description: "", price: 25},
    //   {itemName: "Corona Extra", imageURL: "", description: "", price: 25}]},
    // {name: "Tequila", items: [
    //   {itemName: "Jose Cuervo", imageURL: "", description: "", price: 10}]},
    // {name: "Liquor", items: [
    //   {itemName: "Jägermeister", imageURL: "", description: "", price: 10},
    //   {itemName: "Tubi 60", imageURL: "", description: "", price: 10}]},
    // {name: "Arak", items: [
    //   {itemName: "Arak Elite", imageURL: "", description: "", price: 10}]},
    // {name: "Rum", items: [
    //   {itemName: "Captain Morgan", imageURL: "", description: "", price: 10}]},
    // {name: "Absinthe", items: [
    //   {itemName: "Sauvage", imageURL: "", description: "", price: 25}]}];

    return(<div className="drinkWraper">
    <TopSlider itemsList={drinkList} />
    </div>)
}
export default Drink;