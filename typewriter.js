"use strict";

//VARIABLES
const container = document.querySelector("#typewriter");
const text = container.textContent.trim();
const button = document.querySelector("button");

//SETUP
container.innerHTML = "";
let i = 0;

//SOUNDS
const typeKey1 = document.getElementById("typekey1");
const typeKey2 = document.getElementById("typekey2");
const typeSpace = document.getElementById("typespace");
const typeLast = document.getElementById("typelast");
const typeReturn = document.getElementById("typereturn");

function typeText() {
  if (i < text.length) {
    button.classList.add("clicked");

    //SETTING UP SOUNDS
    if (text.charCodeAt(i) == 32) {
      typeSpace.play();
    } else if (i == text.length - 1) {
      typeLast.play();
    } else if (text.charCodeAt(i) < 110) {
      typeKey1.play();
    } else if (111 < text.charCodeAt(i) < 143) {
      typeKey2.play();
    }

    //DISPLAY CHARACTERS
    container.textContent += text[i];
    i++;
    setTimeout(typeText, 500);
  } else {
    //FINISHING SOUND
    typeReturn.play();
  }
}

button.addEventListener("click", typeText);
