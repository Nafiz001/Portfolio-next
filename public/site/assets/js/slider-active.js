/***************************************************
==================== JS INDEX ======================
****************************************************

01. Marquee Js

****************************************************/

/* The template's Swiper sliders (brand / testimonial / service carousels) were
   removed along with those sections, so Swiper is no longer loaded. Only the
   marquee ticker remains. */

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. Marquee Js
  if ($(".marquee_left").length) {
    $(".marquee_left").marquee({
      speed: 50,
      gap: 0,
      delayBeforeStart: 0,
      duplicated: true,
      pauseOnHover: true,
      startVisible: true,
      direction: "left",
      loop: -1,
    });
  }
})(jQuery);
