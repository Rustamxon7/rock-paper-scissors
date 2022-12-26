"use strict";

const rulesBtn = document.querySelector(".btn-rules");
const rulesModal = document.querySelector("#rules");
const overlay = document.querySelector("#overlay");
const closeRules = document.querySelector(".close--rules");

rulesModal.style.display = "none";
overlay.style.display = "none";

rulesBtn.addEventListener("click", () => {
  rulesModal.style.display = "flex";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  rulesModal.style.display = "none";
  overlay.style.display = "none";
});

closeRules.addEventListener("click", () => {
  rulesModal.style.display = "none";
  overlay.style.display = "none";
});

let player;

let komputer;

let result;

let options = ["rock", "paper", "scissors"];

const kompTallaydi = () => {
  komputer = Math.floor(Math.random() * 3);
  return options[komputer];
};

const durrang = () => {
  if (player === komputer) {
    return true;
  } else {
    return false;
  }
};

const kimYutdi = (player, komputer) => {
  if (durrang()) {
    return "durrang";
  } else if (player === options[2] && komputer === options[1]) {
    return "player";
  } else if (player === options[0] && komputer === options[2]) {
    return "player";
  } else if (player === options[1] && komputer === options[0]) {
    return "player";
  } else {
    return "komputer";
  }
};

const playGame = (option) => {
  player = option;
  komputer = kompTallaydi();
  result = kimYutdi(player, komputer);
  console.log(player);
  console.log(komputer);
  console.log(result);
};

playGame("rock");
