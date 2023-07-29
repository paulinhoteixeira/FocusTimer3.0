import {
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
  buttonPlay,
  buttonPause,
  buttonMore,
  buttonStop,
  buttonMinus,
  sliders,
} from "./elements.js";

export default function () {
  function changeColorMode() {
    let isDarkMode = body.classList.contains("dark-mode");
    resetColors()

    body.classList.toggle("dark-mode");

    darkButton.classList.toggle("hide");
    lightButton.classList.toggle("hide");

    buttonPlay.classList.toggle("dark-mode");
    buttonPause.classList.toggle("dark-mode");
    buttonStop.classList.toggle("dark-mode");
    buttonMore.classList.toggle("dark-mode");
    buttonMinus.classList.toggle("dark-mode");


    if (isDarkMode) {
      bgButtonForest.classList.remove("dark-mode");
      bgButtonRain.classList.remove("dark-mode");
      bgButtonCoffeeShop.classList.remove("dark-mode");
      bgButtonBonfire.classList.remove("dark-mode");

      sliders.forEach(function (slider) {
        slider.classList.remove("dark-mode");
      });
    } else {
      bgButtonForest.classList.add("dark-mode");
      bgButtonRain.classList.add("dark-mode");
      bgButtonCoffeeShop.classList.add("dark-mode");
      bgButtonBonfire.classList.add("dark-mode");

      sliders.forEach(function (slider) {
        slider.classList.add("dark-mode");
      });
    }
  }

  function resetColors() {
    let bgMode = body.classList.contains("dark-mode")
      ? "darkBgPressed"
      : "bgPressed";

    bgButtonForest.classList.remove(bgMode);
    shapeButtonForest.classList.remove("buttonPressed");
    bgButtonRain.classList.remove(bgMode);
    shapeButtonRain.classList.remove("buttonPressed");
    bgButtonCoffeeShop.classList.remove(bgMode);
    shapeButtonCoffeeShop.classList.remove("buttonPressed");
    bgButtonBonfire.classList.remove(bgMode);
    shapeButtonBonfire.classList.remove("buttonPressed");
    resetDarkMode();
  }

  function resetDarkMode() {
    let isDarkMode = body.classList.contains("dark-mode");

    if (isDarkMode) {
      bgButtonForest.classList.add("dark-mode");
      bgButtonRain.classList.add("dark-mode");
      bgButtonCoffeeShop.classList.add("dark-mode");
      bgButtonBonfire.classList.add("dark-mode");
    }
  }

  function isDarkMode(button) {
    let isDarkMode = body.classList.contains("dark-mode");
    if (isDarkMode) {
      button.classList.remove("dark-mode");
    }
  }

  function changeButtonColor(sound) {
    resetColors();
    let bgMode = body.classList.contains("dark-mode")
      ? "darkBgPressed"
      : "bgPressed";

    switch (sound) {
      case "forest":
        bgButtonForest.classList.add(bgMode);
        shapeButtonForest.classList.add("buttonPressed");
        isDarkMode(bgButtonForest);
        break;
      case "rain":
        bgButtonRain.classList.add(bgMode);
        shapeButtonRain.classList.add("buttonPressed");
        isDarkMode(bgButtonRain);

        break;
      case "coffeeShop":
        bgButtonCoffeeShop.classList.add(bgMode);
        shapeButtonCoffeeShop.classList.add("buttonPressed");
        isDarkMode(bgButtonCoffeeShop);

        break;
      case "bonfire":
        bgButtonBonfire.classList.add(bgMode);
        shapeButtonBonfire.classList.add("buttonPressed");
        isDarkMode(bgButtonBonfire);

        break;
    }
  }

  return {
    resetColors,
    changeButtonColor,
    changeColorMode,
  };
}
