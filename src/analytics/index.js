import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
gsap.set(".rate-line", { drawSVG: "0%" });
const heroCards = document.querySelectorAll(
  ".hero-card, .analytcis_hero-grid-img, .analytcis_hero-svg-wrap"
);
const mm = gsap.matchMedia();
const maxTime = 2;
let distance = "15";
let distanceLarge = "20";
let measure = "rem";
mm.add("(max-width: 991px)", () => {
  distanceLarge = "12.5";
  distance = "8.8";
});
mm.add("(max-width: 768px)", () => {
  distanceLarge = "8.5";
});
mm.add("(max-width: 479px)", () => {
  distance = "5";
  distanceLarge = "5";
});

const card1 = document.querySelector("[data-hero-card='1']");
const card2 = document.querySelector("[data-hero-card='2']");
const card3 = document.querySelector("[data-hero-card='3']");
const card4 = document.querySelector("[data-hero-card='4']");
const card5 = document.querySelector("[data-hero-card='5']");
const card6 = document.querySelector("[data-hero-card='6']");
//Initial states for card 1 spinning nums
gsap.set(card1.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 2}${measure}`,
});
gsap.set(card1.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 6}${measure}`,
});
gsap.set(card1.querySelector(".n-3"), {
  y: `-=${(distance / 10) * 7}${measure}`,
});

//Initial states for card 2 spinning nums
gsap.set(card2.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 2}${measure}`,
});
gsap.set(card2.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 1}${measure}`,
});

//Initial states for card 3 spinning nums
gsap.set(card3.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 5}${measure}`,
});
gsap.set(card3.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 8}${measure}`,
});

//Initial states for card 4 spinning nums
gsap.set(card4.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 1}${measure}`,
});
gsap.set(card4.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 6}${measure}`,
});

//Initial states for card 5 spinning nums
gsap.set(card5.querySelector(".n-1"), {
  y: `-=${(distance / 10) * 4}${measure}`,
});
gsap.set(card5.querySelector(".n-2"), {
  y: `-=${(distance / 10) * 8}${measure}`,
});

//Initial states for card 6 spinning nums
gsap.set(card6.querySelector(".n-1"), {
  y: `-=${(distanceLarge / 10) * 1}${measure}`,
});
gsap.set(card6.querySelector(".n-2"), {
  y: `-=${(distanceLarge / 10) * 1}${measure}`,
});

gsap.to(heroCards, {
  delay: 3.4,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});

//Spinning nums 1
const animTl1 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl1
  .to(card1.querySelector(".n-3"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card1.querySelector(".n-4"),
    { y: `-=${(distance / 10) * 6}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card1.querySelector(".n-5"),
    { y: `-=${(distance / 10) * 9}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl1, 5.4, { progress: 1, ease: "power3.inOut" });

//Spinning nums 2
const animTl2 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl2
  .to(card2.querySelector(".n-1"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card2.querySelector(".n-2"),
    { y: `-=${(distance / 10) * 6}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl2, 5.4, { progress: 1, ease: "power3.inOut" });

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
    { y: `-=${(distance / 10) * 6}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl3, 5.4, { progress: 1, ease: "power3.inOut" });

//Spinning nums 4
const animTl4 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl4
  .to(card4.querySelector(".n-1"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card4.querySelector(".n-2"),
    { y: `-=${(distance / 10) * 4}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl4, 5.4, { progress: 1, ease: "power3.inOut" });

//Spinning nums 5
const animTl5 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl5
  .to(card5.querySelector(".n-2"), {
    y: `-=${(distance / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card5.querySelector(".n-3"),
    { y: `-=${(distance / 10) * 10}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card5.querySelector(".n-4"),
    { y: `-=${(distance / 10) * 10}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl5, 5.4, { progress: 1, ease: "power3.inOut" });

//Spinning nums 6

const animTl6 = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

animTl6
  .to(card6.querySelector(".n-2"), {
    y: `-=${(distanceLarge / 10) * 1}${measure}`,
    duration: maxTime / 20,
  })
  .to(
    card6.querySelector(".n-3"),
    { y: `-=${(distanceLarge / 10) * 12}${measure}`, duration: maxTime / 20 },
    "<0%"
  )
  .to(
    card6.querySelector(".n-4"),
    { y: `-=${(distanceLarge / 10) * 14}${measure}`, duration: maxTime / 20 },
    "<0%"
  );

gsap.to(animTl6, 5.4, { progress: 1, ease: "power3.inOut" });

gsap.to(".rate-line", {
  drawSVG: "0% 100%",
  opacity: 1,
  duration: 1.4,
  delay: 1,
  ease: "power4.out",
});
