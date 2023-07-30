import { wichSlider } from "./elements.js";

export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );
  const forestSound = new Audio("./assets/Floresta.wav");
  const rainSound = new Audio("./assets/Chuva.wav");
  const coffeeShopSound = new Audio("./assets/Cafeteria.wav");
  const bonfireSound = new Audio("./assets/Lareira.wav");

  bgAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function bgSound(sound) {
    bgSoundPause();

    switch (sound) {
      case "forest":
        forestSound.play();
        forestSound.loop = true;
        wichSlider("forestSound").classList.add("press");
        resetVolume(sound)
        break;
      case "rain":
        rainSound.play();
        rainSound.loop = true;
        wichSlider("rainSound").classList.add("press");
        resetVolume(sound)
        break;
      case "coffeeShop":
        coffeeShopSound.play();
        coffeeShopSound.loop = true;
        wichSlider("coffeeShopSound").classList.add("press");
        resetVolume(sound)
        break;
      case "bonfire":
        bonfireSound.play();
        bonfireSound.loop = true;
        wichSlider("bonfireSound").classList.add("press");
        resetVolume(sound)
        break;
    }
  }

  function bgSoundPause() {
    forestSound.pause();
    rainSound.pause();
    coffeeShopSound.pause();
    bonfireSound.pause();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function volumeAdjust(button) {
    let slider = wichSlider(button);
    let isPressed = slider.classList.contains("press");
    let newVolume;

    if (!isPressed) {
      switch (button) {
        case "forestSound":
          forestSound.volume = 0.5;
        case "rainSound":
          rainSound.volume = 0.5;
        case "coffeeShopSound":
          coffeeShopSound.volume = 0.5;
        case "bonfireSound":
          bonfireSound.volume = 0.5;
      }
      slider.value = 50;
    }

    slider.oninput = function () {
      newVolume = this.value;
      forestSound.volume = newVolume / 100;
      slider.value = newVolume;
    };
  }

  function resetVolume(sound) {
    let forest = wichSlider("forestSound");
    let rain = wichSlider("rainSound");
    let coffeeShop = wichSlider("coffeeShopSound");
    let bonfire = wichSlider("bonfireSound");

    switch (sound){
      case "forest":
        rain.value = 0;
        coffeeShop.value = 0;
        bonfire.value = 0;
        rain.classList.remove("press");
        coffeeShop.classList.remove("press");
        bonfire.classList.remove("press");
        break;
      case "rain":
        forest.value = 0;
        coffeeShop.value = 0;
        bonfire.value = 0;
        forest.classList.remove("press");
        coffeeShop.classList.remove("press");
        bonfire.classList.remove("press");
        break;
      case "coffeeShop":
        forest.value = 0;
        rain.value = 0;
        bonfire.value = 0;
        forest.classList.remove("press");
        rain.classList.remove("press");
        bonfire.classList.remove("press");
        break;
      case "bonfire":
        forest.value = 0;
        coffeeShop.value = 0;
        rain.value = 0;
        forest.classList.remove("press");
        coffeeShop.classList.remove("press");
        rain.classList.remove("press");
        break;
    }
   
  }

  return {
    pressButton,
    timeEnd,
    bgSound,
    bgSoundPause,
    volumeAdjust,
    resetVolume,
  };
}
