"use strict";

let burgerMenu = document.querySelector(".topnav .burger-menu");

burgerMenu.onclick = function handler() {
  let topnav = document.querySelector(".topnav");

  if (topnav.className == "topnav") topnav.className = "topnav responsive";
  else topnav.className = "topnav";
};
