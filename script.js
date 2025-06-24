"use strict";

/*
<<<<<<< HEAD
Explanation:
=======
Explanation for throtlling:
>>>>>>> slider-nav

1. `isThrottled` is initially false, meaning scroll actions are allowed.

2. When the user scrolls (wheel event fires), we check:
   - If `isThrottled` is true, exit early (ignore the scroll).

3. If not throttled:
   - We handle the scroll direction (up or down).
   - Then set `isThrottled = true` to prevent further scroll handling.

4. A `setTimeout` runs after 1.2 seconds to reset `isThrottled` to false,
   allowing another scroll event to be handled.

5. This creates a cooldown (or throttle) period between scroll actions,
   preventing rapid firing and slide skipping.
*/

let isThrottled = false;
let counter = 1;
window.addEventListener("wheel", (e) => {
  if (isThrottled) return;

  isThrottled = true;
  setTimeout(() => {
    isThrottled = false;
  }, 1000);

<<<<<<< HEAD
  if (e.deltaY > 0) {
    counter++;
    if (counter > 5) counter = 1;
  } else if (e.deltaY < 0) {
=======
  if (e.deltaY > 0) slideSection("right");
  else if (e.deltaY < 0) slideSection("left");
});

// ------------------------------------------------------//

const [leftBtn, rightBtn] = document.querySelectorAll(".arrow-btn");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

leftBtn.addEventListener("click", () => {
  slideSection("left");
});

rightBtn.addEventListener("click", () => {
  slideSection("right");
});

function slideSection(leftOrRight) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  if (leftOrRight === "left") {
>>>>>>> slider-nav
    counter--;
    if (counter < 1) counter = 5;
  }

<<<<<<< HEAD
  const section = document.querySelector(`.section-${counter}`);

  section.style.left = `-100vw`;

  console.log(section);
=======
  if (leftOrRight === "right") {
    counter++;
    if (counter > 5) counter = 1;
  }

  const section = document.querySelector(`.section-${counter}`);
  const dot = document.querySelector(`.dot-${counter}`);

  section.classList.add("active");
  dot.classList.add("active");
}

slideSection(); // initial page

// Handle nav section

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  const navLink = e.target.closest(".nav-link");
  if (!navLink) return;

  //? get the links number
  const index = Number(navLink.dataset.index);
  counter = index;
  slideSection();
>>>>>>> slider-nav
});
