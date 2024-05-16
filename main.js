const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".music__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".music__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".music__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
});

ScrollReveal().reveal(".discount__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".discount__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".discount__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
