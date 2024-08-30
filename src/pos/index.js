import gsap from "gsap";
const heroCards = document.querySelectorAll(".pos_hero-anim-img");
gsap.to(heroCards, {
  delay: 2.3,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: { each: 0.075 },
});
