"use strict";

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  if (document.querySelector(".product__slider")) {
    new Swiper(".product__slider", {
      loop: true,
      speed: 1000,
      parallax: true,
      mousewheel: true,
      keyboard: true,
      on: {
        init: function () {
          document.documentElement.classList.add("loaded");
        },
      },
    });
  }
}
