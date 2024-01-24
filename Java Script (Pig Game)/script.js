"use strict";
const score0El = document.querySelector("#score--0");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score1El = document.querySelector("#score--1");
const curr0El = document.querySelector("#current--0");
const curr1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let active = 0;
const scores = [0, 0];
let playing = true;
const swiktch = function () {
  document.getElementById(`current--${active}`).textContent = 0;
  currentScore = 0;
  active = active === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${active}`).textContent = currentScore;
    } else {
      document.getElementById(`current--${active}`).textContent = 0;
      swiktch();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[active] += currentScore;
    document.getElementById(`score--${active}`).textContent = scores[active];
    if (scores[active] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${active}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active}`)
        .classList.remove("player--active");
    } else {
      swiktch();
    }
  }
});
btnNew.addEventListener("click", function () {
  currentScore = 0;
  document.getElementById("current--0").textContent = currentScore;
  document.getElementById("current--1").textContent = currentScore;
  document.getElementById("score--0").textContent = currentScore;
  document.getElementById("score--1").textContent = currentScore;
  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document
    .querySelector(`.player--${active}`)
    .classList.remove("player--winner");
});
