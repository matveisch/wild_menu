import React, { useContext, useState } from "react";
import { LanguageContext } from "../../LanguageContext";

export default function useItems(){

  const {language, setLanguage} = useContext(LanguageContext);

  const itemsEng = {
    language: 1,

    drinks: [{name: "Non-Alcoholic", items:[
    {itemName: "Coca-Cola", imageURL: "https://bit.ly/3zJ0ami", description: "0.75ml bottle", price: 15},
    {itemName: "Juice", imageURL: "https://bit.ly/3zJ0ami", description: "Orange, apple, huisgori", price: 10},
    {itemName: "Cocktail", imageURL: "https://bit.ly/3zJ0ami", description: "Ask bartender", price: 20}]},
    {name: "Vodka", items:[
    {itemName: "Van Gogh", imageURL: "https://www.vangoghvodka.com/wp-content/themes/vangogh2016/img/logo.png", description: "Unflavored vodka and flavored vodka", price: 10},
    {itemName: "Stolichnaya", imageURL: "https://stoli.com/wp-content/uploads/2022/08/stolo_white_logo.svg", description: "Vodka made of wheat and rye grain", price: 10},
    {itemName: "Absolut", imageURL: "https://duckduckgo.com/i/3a2bab3c.png", description: "Leading brand of Premium vodka offering the true taste of vodka", price: 10}]},
  {name: "Whiskey", items: [
    {itemName: "Jack Daniel's", imageURL: "https://www.jackdaniels.com/themes/JDTheme2/css/img/navLogo.png" , description: "40% ALC", price: "15"},
    {itemName: "Bushmills", imageURL: "https://www.bushmills.eu/wp-content/themes/bushmills/dist/images/logo.png", description: "", price: 10},
    {itemName: "Grant's", imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2021%2F04%2FGrants-Logo.png&f=1&nofb=1", description: "", price: 10},
    {itemName: "Dalmore", imageURL: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.whiskyminibottles.eu%2FContent%2FLogos%2FDalmore.png&f=1&nofb=1", description: "", price: 25}]},
  {name: "Beer", items: [
    {itemName: "Budweiser", imageURL: "https://bit.ly/3vVtxkq", description: "Medium-bodied, flavorful, crisp American-style lager. 5%", price: "15/20"},
    {itemName: "Edelweiss", imageURL: "https://www.edelweissbeer.com/frontend/assets/images/edelweiss-logo.svg", description: "This particularly smooth beer is brewed with all natural ingredients with a touch of mountain herbs and spices. 4,8%", price: "15/20"},
    {itemName: "Barbãr Blonde", imageURL: "https://bit.ly/3AgpSjH", description: "Honey is added to the malted wheat and hops, giving it a sweeter and richer taste. 8%", price: "20/25"},
    {itemName: "Kasteel Rogue", imageURL: "https://bit.ly/3BZl834", description: "Dark red beer with sour cherries. 7%", price: "20/25"},
    {itemName: "Trippel", imageURL: "", description: "", price: "20/25"},
    {itemName: "Kozel Dark", imageURL: "https://www.kozelbeer.com/images/logo-big-white.png", description: "Smooth beer with caramel taste created by four different malts. 3,8%", price: "20/25"},
    {itemName: "Liefmans", imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bierlinie-berlin.de%2Fimages%2Fstories%2Fflexicontent%2Fm_liefmans_fruitesse_on_the_rocks_brauerei_logo.jpg&f=1&nofb=1", description: "Fresh, intense flavour of strawberries, raspberries, black cherries, elderberries and blueberries", price: "20/25"},
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
    {itemName: "Xenta", imageURL: "", description: "", price: 25}]}],

    food: [{name: "HotDog", items:[
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
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}],

    hookah: [{name: "Light", items:[
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
    {itemName: "Brownie", imageURL: "", description: "", price: 10}]}],

    menu: ["Drink", "Food", "Hookah"]

  };
   const itemsRus = {
    language: 0,
    drinks: [{name: "Водка", items:[
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
    {itemName: "Sauvage", imageURL: "", description: "", price: 25}]}],

    food: [{name: "Хот-дог", items:[
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
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}],

    hookah: [{name: "Light", items:[
    {itemName: "Mango Camomile", imageURL: "", description: "Зеленый чай, ромашка и спелое манго", price: ""},
    {itemName: "Creamy-Lemon Waffles", imageURL: "", 
    description: "Лимонные вафли с нежной начинкой из ванильного крема", price: ""},
    {itemName: "Pink Jam", imageURL: "", 
    description: "Яркие цитрусовые ноты розового грейпфрута, подчеркнутые ароматом спелой клубники и малинового джема", price: ""},
    {itemName: "Grape Britain", description: "Виноград с нотками свежести", imageURL: "", price: ""},
    {itemName: "Watermelody", description: "Арбуз и дыня со свежестью", imageURL: "", price: ""},
    {itemName: "Blueberry Mint", description: "Черника в сочетании с нежной мятой", imageURL: "", price: ""},
    {itemName: "Forest Berry", description: "Смесь ягод из сочетания ароматов красной малины, ежевики и клубники", imageURL: "", price: ""},
    {itemName: "Fruit Ninja", description: "Ананас доминирует широкий спектр фруктов, таких как кийи, персик, маракуя и множество других", imageURL: "", price: ""},
    {itemName: "Citrus Boom", description: "Грейпфрут и сладкое помело", imageURL: "", price: ""},
    {itemName: "Berrytale", description: "Лесные ягоды", imageURL: "", price: ""},
    {itemName: "Thai Mango", description: "Сладкий вкусный манго с травянистым оттенком", imageURL: "", price: ""},
    {itemName: "Amazingreen", description: "Зеленые ягоды с легкой прохладой", imageURL: "", price: ""}]},
    {name: "Medium", items:[
    {itemName: "Pinkman", description: "Кисло-сладкое сочетание розового грейпфрута и клубники, приправленное малиновым сиропом", imageURL: "", price: ""},
    {itemName: "Pineapple Rings", description: "Сочный ананас", imageURL: "", price: ""},
    {itemName: "Tropic Juice", description: "Необычайно богатая смесь ароматов ананаса и экзотической маракуйи", imageURL: "", price: ""},
    {itemName: "Orange Team", description: "Кисло-сладкое сочетание апельсина и мандарина", imageURL: "", price: ""},
    {itemName: "Ice Cream", description: "Ванильное мороженое", imageURL: "", price: ""}]},
    {name: "Heavy", items:[
    {itemName: "Red Orange", imageURL: "", description: "Насыщенный апельсин в сочетании с кислыми и сладкими нотами", price: ""},
    {itemName: "Chupa Graper", imageURL: "", description: "Виноградный Чупа-Чупс", price: ""},
    {itemName: "Apple shock", imageURL: "", description: "Освежающее спелое зеленое яблоко с великолепной кислотой", price: ""},
    {itemName: "Ice Baby", imageURL: "", description: "Освежающий ягодный сорбет с цитрусовым послевкусием", price: ""},
    {itemName: "Brownie", imageURL: "", description: "Нежное шоколадное печенье", price: ""}]}],

    menu: ["Напитки", "Еда", "Кальян"]
  };
   const itemsHeb = {
    language: 2,
    drinks: [{name: "וודקה", items:[
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
    {itemName: "Sauvage", imageURL: "", description: "", price: 25}]}],

    food: [{name: "נקניקיה", items:[
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
{itemName: "Chicken Salad", imageURL: "", description: "Chicken, lettuce, cherry tomatoes, cucumbers, red onion, olives, sauce", price: "35₪"}]}],

    hookah: [{name: "Light", items:[
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
    {itemName: "Brownie", imageURL: "", description: "Нежное шоколадное печенье", price: 10}]}],

    menu: ["שתייה", "אוכל", "נרגילה"]
  };

  switch (language){
    case 0:
      return itemsRus
      console.log("drink rus")
      break;
      case 2: 
      return itemsHeb
      console.log("drink heb")
      break;
      default:
      return itemsEng;
      console.log("drink eng+def")
      break;
  }

  // return drinkList;
}
