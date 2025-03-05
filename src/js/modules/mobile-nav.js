function mobileNav() {
  // Mobile nav button
  const navBtnOpen = document.querySelector("#mobile-nav-btn");
  const navBtnClose = document.querySelector("#close-mobile-nav");
  const mobileNavFade = document.querySelector(".mobile-nav-fade");
  const nav = document.querySelector(".mobile-nav");

  navBtnOpen.onclick = openMobileNav; // Open mobile navigation by button
  navBtnClose.onclick = closeMobileNav; // Close mobile navigation by button
  mobileNavFade.onclick = closeMobileNav; // Close mobile navigation by overlay

  function openMobileNav() {
    nav.classList.add("mobile-nav--open");
    mobileNavFade.classList.add("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  }

  function closeMobileNav() {
    nav.classList.remove("mobile-nav--open");
    mobileNavFade.classList.remove("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  }
}

export default mobileNav;
