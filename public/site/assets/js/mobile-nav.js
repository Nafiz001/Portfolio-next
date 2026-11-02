// In-page links (the menu, the hero highlights, the footer). ScrollSmoother
// moves the page with a transform, so the browser's own jump to #id does
// nothing; and a tap in the mobile menu must also close the menu.
(function () {
  "use strict";

  function closeMenu() {
    var area = document.querySelector(".tw-offcanvas-2-area");
    if (!area || !area.classList.contains("opened")) return;
    var btn = document.querySelector(".tw-offcanvas-2-close-btn");
    if (btn) btn.click();
    else area.classList.remove("opened");
  }

  function headerOffset() {
    var h = document.querySelector("header");
    return h ? Math.round(h.getBoundingClientRect().height) + 12 : 80;
  }

  function go(hash) {
    var target = hash === "#" || hash === "#top" ? null : document.querySelector(hash);
    if (hash !== "#" && !target) return false;
    var smoother = window.ScrollSmoother && window.ScrollSmoother.get && window.ScrollSmoother.get();
    if (smoother) {
      if (target) smoother.scrollTo(target, true, "top " + headerOffset() + "px");
      else smoother.scrollTo(0, true);
    } else {
      var y = target ? target.getBoundingClientRect().top + window.scrollY - headerOffset() : 0;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (history.replaceState) history.replaceState(null, "", hash === "#" ? location.pathname : hash);
    return true;
  }

  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var hash = a.getAttribute("href");
    var inMenu = !!a.closest(".tw-offcanvas-2-area");
    if (inMenu) closeMenu();
    // Let the menu's closing animation start before the page moves under it.
    if (go(hash)) {
      e.preventDefault();
    }
  });

  // Arriving with a hash (a shared link to #portfolio) lands on that section.
  window.addEventListener("load", function () {
    if (location.hash && location.hash.length > 1) setTimeout(function () { go(location.hash); }, 400);
  });
})();
