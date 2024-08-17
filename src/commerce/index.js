import gsap from "gsap";

const heroCards = document.querySelectorAll(".hero-commerce_massonry-img");
const commerceTickerTl = gsap.timeline();
//Infinite marquee loop
commerceTickerTl.to(".hero-commerce_massonry-grid", {
  x: "-100%",
  duration: 30,
  ease: "none",
  repeat: -1,
});

gsap.to(heroCards, {
  delay: 3.4,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});

//Modal
const themesBtn = document.querySelector("#explore-themes a");
const themesModal = document.querySelector("#themes-modal");
const themesCloseBtn = themesModal.querySelector(
  "#themes-modal .modal_close-btn"
);
themesBtn.addEventListener("click", () => {
  themesModal.classList.add("is-active");
});

themesCloseBtn.addEventListener("click", () => {
  themesModal.classList.remove("is-active");
});
