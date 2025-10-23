import { changePage } from "../model/model.js";

function initListeners() {}

function initMenuToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const navWrap = document.querySelector(".the_nav .nav-nav");
  if (!toggle || !navWrap) return;

  toggle.addEventListener("click", () => {
    const isOpen = navWrap.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking a nav link
  navWrap.querySelectorAll("nav a").forEach((a) => {
    a.addEventListener("click", () => {
      navWrap.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function route() {
  let hastTag = window.location.hash;
  let pageID = hastTag.replace("#", "");
  changePage(pageID);

  // update nav active state
  // remove active from all links, then add to the one matching the current hash
  const navLinks = document.querySelectorAll(".the_nav .nav-nav nav a");
  navLinks.forEach((a) => a.classList.remove("active"));
  if (pageID) {
    const match = document.querySelector(
      '.the_nav .nav-nav nav a[href="#' + pageID + '"]'
    );
    if (match) match.classList.add("active");
  } else {
    // when no hash (root), mark #home as active if present
    const homeLink = document.querySelector(
      '.the_nav .nav-nav nav a[href="#home"]'
    );
    if (homeLink) homeLink.classList.add("active");
  }

  // console.log("Routing to page:", pageID);
}

function initRouting() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initRouting();
  initListeners();
  initMenuToggle();
});
