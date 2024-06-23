const heroCards = document.querySelectorAll(
  ".pricing_inner-wrap, .pricing_banner"
);
gsap.to(heroCards, {
  delay: 0.2,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});
