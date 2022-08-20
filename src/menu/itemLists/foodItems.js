import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function useFood(){

  const {language, setLanguage} = useContext(LanguageContext);

const foodListEng = [{name: "HotDog", items:[
    {itemName: "Cabbage in mahonnaise", imageURL: "", description: "", price: ""},
{itemName: "Red cabbage in mahonnaise", imageURL: "", description: "", price: ""},
{itemName: "Pickles", imageURL: "", description: "", price: ""},
{itemName: "Sauce", imageURL: "", description: "BBQ, mayonnnaise, ketchup", price: ""}]},
  {name: "Fries", items:[
   {itemName: "Parmesan", imageURL: "", description: "", price: "+5₪"},
   {itemName: "Schnitzels", imageURL: "", description: "", price: "+20₪"}, 
   {itemName: "Sauce", imageURL: "", description: "BBQ, mayonnnaise, ketchup", price: ""}]},
  {name: "Schnitzel", items:[
    {itemName: "Bun", imageURL: "", description: "", price: "+5₪"},
  {itemName: "Cabbage in mahonnaise", imageURL: "", description: "", price: ""},
{itemName: "Red cabbage in mahonnaise", imageURL: "", description: "", price: ""},
{itemName: "Pickles", imageURL: "", description: "", price: ""},
{itemName: "Sauce", imageURL: "", description: "BBQ, mayonnnaise, ketchup", price: ""}]},
{name: "Salad", items:[
{itemName: "Classic Salad", imageURL: "", description: "Lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "30₪"},
{itemName: "Feta Salad", imageURL: "", description: "Feta cheese, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"},
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}];


const foodListRus = [{name: "Хот-дог", items:[
    {itemName: "Капуста в майонезе", imageURL: "", description: "", price: ""},
{itemName: "Красная капуста в майонезе", imageURL: "", description: "", price: ""},
{itemName: "Соленые огурцы", imageURL: "", description: "", price: ""},
{itemName: "Соусы", imageURL: "", description: "Кетчуп, Майонез, Барбекю", price: ""}]},
  {name: "Fries", items:[
    {itemName: "15 nis", imageURL: "", description: "", price: ""},
   {itemName: "Пармезан", imageURL: "", description: "", price: "+5₪"},
   {itemName: "Шницели", imageURL: "", description: "", price: "+20₪"}, 
   {itemName: "Соусы", imageURL: "", description: "Кетчуп, Майонез, Барбекю", price: ""}]},
  {name: "Schnitzel", items:[
    {itemName: "Булочка", imageURL: "", description: "", price: "+5₪"},
  {itemName: "Капуста в майонезе", imageURL: "", description: "", price: ""},
{itemName: "Красная капуста в майонезе", imageURL: "", description: "", price: ""},
{itemName: "Соленые огурцы", imageURL: "", description: "", price: ""},
{itemName: "Соусы", imageURL: "", description: "Кетчуп, Майонез, Барбекю", price: ""}]},
{name: "Salad", items:[
{itemName: "Classic Salad", imageURL: "", description: "Lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "30₪"},
{itemName: "Feta Salad", imageURL: "", description: "Feta cheese, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"},
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}];

const foodListHeb = [{name: "נקניקיה", items:[
    {itemName: "כרוב במיונז", imageURL: "", description: "", price: ""},
{itemName: "כרוב אדום במיונז", imageURL: "", description: "", price: ""},
{itemName: "חמוצים", imageURL: "", description: "", price: ""},
{itemName: "רטבים", imageURL: "", description: "קטשופ, מיונז, ברביקיו", price: ""}]},
  {name: "צ'יפס", items:[
    {itemName: "15 nis", imageURL: "", description: "", price: ""},
   {itemName: "פרמזן", imageURL: "", description: "", price: "+5₪"},
   {itemName: "שניצלונים", imageURL: "", description: "", price: "+20₪"}, 
   {itemName: "רטבים", imageURL: "", description: "קטשופ, מיונז, ברביקיו", price: ""}]},
  {name: "שניצלים", items:[
    {itemName: "לַחמָנִיָה", imageURL: "", description: "", price: "+5"},
  {itemName: "כרוב במיונז", imageURL: "", description: "", price: ""},
{itemName: "כרוב אדום במיונז", imageURL: "", description: "", price: ""},
{itemName: "חמוצים", imageURL: "", description: "", price: ""},
{itemName: "רטבים", imageURL: "", description: "קטשופ, מיונז, ברביקיו", price: ""}]},
{name: "Salad", items:[
{itemName: "Classic Salad", imageURL: "", description: "Lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "30₪"},
{itemName: "Feta Salad", imageURL: "", description: "Feta cheese, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"},
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}];



  switch (language){
    case 0:
      return [...foodListRus]
      break;
      case 2: 
      return [...foodListHeb]
      break;
      default:
      return [...foodListEng];
      break;
  }


}
