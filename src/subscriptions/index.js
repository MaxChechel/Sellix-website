import gsap from "gsap";

const heroCards = document.querySelectorAll(".subscr_hero-card");
gsap.to(heroCards, {
  delay: 0.2,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});
const mm = gsap.matchMedia();
const maxTime = 2;
const distance = "22.5";

let measure = "rem";

const card1 = document.querySelector("[data-hero-card='1']");
const card2 = document.querySelector("[data-hero-card='2']");
const card3 = document.querySelector("[data-hero-card='3']");

//Initial states for card 1 spinning nums
gsap.set(card1.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 8}${measure}`,
});
gsap.set(card1.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 8}${measure}`,
});
gsap.set(card1.querySelector(".n-3"), {
  y: `-=${(distance / 10) * 6}${measure}`,
});

//Initial states for card 2 spinning nums
gsap.set(card2.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 4}${measure}`,
});
gsap.set(card2.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 8}${measure}`,
});
gsap.set(card2.querySelector(".n-3"), {
  y: `-=${(distance / 10) * 6}${measure}`,
});
//Initial states for card 3 spinning nums

gsap.set(card3.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 9}${measure}`,
});

//Spinning nums 1
const animTl1 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl1
  .to(card1.querySelector(".n-1"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card1.querySelector(".n-2"),
    { y: `-=${(distance / 10) * 2}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card1.querySelector(".n-3"),
    { y: `-=${(distance / 10) * 4}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl1, 2, { progress: 1, ease: "power3.inOut" });

//Spinning nums 2
const animTl2 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl2
  .to(
    card2.querySelector(".n-2"),
    { y: `-=${(distance / 10) * 1}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card2.querySelector(".n-3"),
    { y: `-=${(distance / 10) * 4}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card2.querySelector(".n-4"),
    { y: `-=${(distance / 10) * 10}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl2, 2, { progress: 1, ease: "power3.inOut" });

//Spinning nums 3
const animTl3 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl3
  .to(card3.querySelector(".n-2"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card3.querySelector(".n-3"),
    { y: `-=${(distance / 10) * 2}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl3, 2, { progress: 1, ease: "power3.inOut" });
