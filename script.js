"use strict";

/*
Explanation:

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

  if (e.deltaY > 0) {
    counter++;
    if (counter > 5) counter = 1;
  } else if (e.deltaY < 0) {
    counter--;
    if (counter < 1) counter = 5;
  }
});

// ------------------------------------------------------//

const [leftBtn, rightBtn] = document.querySelectorAll(".arrow-btn");
const sections = document.querySelectorAll("section");

leftBtn.addEventListener("click", () => {
  sections.forEach((section) => (section.style.zIndex = "0"));

  counter--;
  if (counter < 1) counter = 5;

  const section = document.querySelector(`.section-${counter}`);
  section.style.zIndex = "10";
});
