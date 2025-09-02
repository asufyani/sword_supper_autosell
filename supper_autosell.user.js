// ==UserScript==
// @name         Supper Autosell
// @version      0.0.6
// @description  autosell duplicate items
// @author       u/Thats_a_movie (github.com/asufyani)
// @match        https://*.devvit.net/index.html*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        unsafeWindow
// @downloadURL  https://github.com/asufyani/sword_supper_autosell/raw/refs/heads/main/supper_autosell.user.js
// @updateURL    https://github.com/asufyani/sword_supper_autosell/raw/refs/heads/main/supper_autosell.user.js

// ==/UserScript==

(function () {
  "use strict";
  function clickSellButton() {
    $(".sell-button").click();
    setTimeout(clickConfirmButton, 500);
  }

  function clickConfirmButton() {
    $(".confirm-button.continue").click();
  }

  function scanEquipment() {
    console.log("scanning equipment");
    const $grid = $(".virtual-items-grid");
    const $equipment = $grid.find("div.equipment-slot");
    const altsToDelete = {};
    $equipment.each(function (idx, equipmentItem) {
      console.log("found an item");
      if ($(equipmentItem).find("img.item-image").alt.includes("Map")) {
        console.log("found a map");
      } else if (altsToDelete[$(equipmentItem).find("img.item-image").alt]) {
        console.log("found a repeat");
        $(equipmentItem).click();
        // setTimeout(clickSellButton, 500);
      } else {
        console.log("not a repeat");
        altsToDelete[$(equipmentItem).find("img")[1].alt] = true;
        console.log(altsToDelete);
      }
    });
  }
  // Your code here...
  const intervalId = setInterval(scanEquipment, 5000);
})();
