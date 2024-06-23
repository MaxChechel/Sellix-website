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
  delay: 0.2,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});
