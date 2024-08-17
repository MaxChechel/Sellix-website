import gsap from "gsap";
const heroCards = document.querySelectorAll(".hero-header_cards-img");
gsap.to(heroCards, {
  delay: 3.4,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: { each: 0.025 },
});
