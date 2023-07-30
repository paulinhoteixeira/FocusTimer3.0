const body = document.querySelector("body");

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");
const buttonForestSound = document.querySelector(".forestSound");
const buttonRainSound = document.querySelector(".rainSound");
const buttonCoffeeShopSound = document.querySelector(".coffeeShopSound");
const buttonBonfireSound = document.querySelector(".bonfireSound");

const darkButton = document.querySelector(".dark-button");
const lightButton = document.querySelector(".light-button");

const bgButtonForest = document.querySelector(".forestSound");
const bgButtonRain = document.querySelector(".rainSound");
const bgButtonCoffeeShop = document.querySelector(".coffeeShopSound");
const bgButtonBonfire = document.querySelector(".bonfireSound");

const shapeButtonForest = document.querySelector(".forestSound svg path");
const shapeButtonRain = document.querySelector(".rainSound svg path");
const shapeButtonCoffeeShop = document.querySelector(
  ".coffeeShopSound svg path"
);
const shapeButtonBonfire = document.querySelector(".bonfireSound svg path");

const sliders = document.querySelectorAll(".slider");

function wichSlider(button) {    
  let slider = document.querySelector(`.${button} .slidecontainer .slider`)
  return slider
}

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonMinus,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeShopSound,
  buttonBonfireSound,
  bgButtonForest,
  bgButtonRain,
  bgButtonCoffeeShop,
  bgButtonBonfire,
  shapeButtonForest,
  shapeButtonRain,
  shapeButtonCoffeeShop,
  shapeButtonBonfire,
  body,
  darkButton,
  lightButton,
  sliders,
  wichSlider
};
