"use strict";
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

const openModal = function () {
  console.log("buttonclicked");
  modal.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") if (!modal.classList.contains("hidden")) closeModal();
});
