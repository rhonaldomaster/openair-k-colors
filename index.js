// ==UserScript==
// @name         Koombea OpenAir: functions
// @name:es      Koombea OpenAir: functions
// @description  Add custom functionality to OpenAir website
// @description:es Agrega funcionalidad personalizada al sitio web de OpenAir
// @namespace    koombea_air
// @version      0.3.0
// @author       rhonaldomaster
// @compatible   chrome
// @compatible   edge
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @copyright    GNU/GPL v3
// @grant        GM_addStyle
// @homepage     https://github.com/rhonaldomaster/openair-k-colors
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openair.com
// @license      GPL-3.0-or-later
// @match        https://koombea-inc.app.openair.com/*
// @downloadURL  https://update.greasyfork.org/scripts/482700/Koombea%20OpenAir.user.js
// @updateURL    https://update.greasyfork.org/scripts/482700/Koombea%20OpenAir.meta.js
// ==/UserScript==

/**
 * Converts booking % to h/d
 */
function convertBookingPercentToHD() {
  const bookings = document.querySelectorAll('.GMGanttFixedIn, .GMGanttLeftIn, .GMGanttRightIn, .GMGanttBaseIn');
  bookings.forEach((booking) => {
    // Validates that the booking wasn't already converted and that it contains the % value
    const bookingHTML = booking.innerHTML;
    if (
      bookingHTML.split('h/d')[0] == bookingHTML &&
      bookingHTML != '' &&
      bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/) != null
    ) {
      const hours_per_day = Math.round(((bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/)[1] * 8) / 100 + Number.EPSILON) * 100) / 100;
      if (bookingHTML.match(/([0-9]*\.?[0-9]+)\s%/)[0] == booking.textContent) {
        // For allocation percentage bubbles at the top
        booking.innerHTML = hours_per_day + 'h/d';
      } else {
        // For bookings
        booking.innerHTML = hours_per_day + 'h/d ' + bookingHTML;
      }
    }
  });
}

window.addEventListener('load', () => {
  setInterval(convertBookingPercentToHD, 1000);
});
