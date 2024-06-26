import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
export default function HeroTicker() {
  gsap.registerPlugin(ScrollTrigger);

  // Select the main track and its containers
  const navbar = document.querySelector(".navbar_component");
  const nums = document.querySelectorAll(".home-hero_num");
  const results = Splitting({ target: nums, by: "chars" });
  const mm = gsap.matchMedia();

  const totalSteps = 6;
  let textDistancePerStep = 14; // Adjust as needed
  let numDistancePerStep = 8; // Adjust as needed

  mm.add("(max-width: 767px)", () => {
    textDistancePerStep = 7;
    numDistancePerStep = 7.5;
  });

  const heroSection = document.querySelector(".section_home-hero ");
  nums.forEach((num) => {
    num.style.willChange = "transform, opacity, filter, visibility";
  });
  const heroScrollTl = gsap.timeline({ defaults: { lazy: false } });

  heroScrollTl
    .to(
      ".home-hero_text-row:first-child .home-hero_num .char",
      {
        y: `-${numDistancePerStep}rem`,
        transform: "translate3d(0, 0, 0)",
        duration: 0.6,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.05 },
      },
      "10%"
    )
    .to(
      ".home-hero_text-row:first-child .home-hero_text",
      {
        opacity: 0.1,
      },
      "10%"
    )
    .to(
      ".home-hero_text-row:nth-child(2) .home-hero_text",
      {
        opacity: 1,
      },
      "10%"
    )
    .to(
      ".home-hero_text-row:nth-child(2) .home-hero_num .char",
      {
        y: `-${numDistancePerStep}rem`,
        transform: "translate3d(0, 0, 0)",
        duration: 0.6,
        opacity: 1,
        ease: "power4.out",
        stagger: { each: 0.05 },
      },
      "10%"
    )
    .to(
      ".home-hero_text-row:nth-child(2) .home-hero_text",
      {
        opacity: 0.1,
      },
      "40%"
    )
    .to(
      ".home-hero_text-row:nth-child(2) .home-hero_num .char",
      {
        y: `-=${numDistancePerStep}rem`,
        transform: "translate3d(0, 0, 0)",
        duration: 0.6,
        opacity: 0,
        ease: "power4.out",
        stagger: { each: 0.05 },
      },
      "40%"
    )
    .to(
      ".home-hero_text-row:nth-child(3) .home-hero_text",
      {
        opacity: 1,
      },
      "40%"
    )
    .to(
      ".home-hero_text-row:nth-child(3) .home-hero_num .char",
      {
        y: `-=${numDistancePerStep}rem`,
        transform: "translate3d(0, 0, 0)",
        duration: 0.6,
        opacity: 1,
        ease: "power4.out",
        stagger: { each: 0.05 },
      },
      "40%"
    );

  ScrollTrigger.create({
    trigger: heroSection,
    start: `top ${navbar.offsetHeight}`,
    end: `+=${window.innerHeight * 2}`,
    scrub: 1.05,
    pin: true,
    animation: heroScrollTl,
  });
}
