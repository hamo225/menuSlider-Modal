"use strict";

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle Nav
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

// // show modal
// open.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// or
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// // close Modal button
// close.addEventListener("click", () => {
//   modal.style.display = "none";
// });
// or
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// Hide modal on outside click
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
