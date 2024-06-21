import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Licences from "../home-animations/licences";
import Marketing from "../home-animations/marketing";
import Embed from "../home-animations/embed";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

Licences();
Marketing();
Embed();

// Select the main track and its containers
const textTrack = document.querySelector(".home-hero_text-track");
const numTrack = document.querySelector(".home-hero_num-wrap");
const container = document.querySelector(".home-hero_text-wrap.is-middle");

// Calculate the total number of steps (containers)
const totalSteps = 6;
const textDistancePerStep = 14; // Adjust as needed
const numDistancePerStep = 8; // Adjust as needed

// Create GSAP timeline for the main track
const trackTl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

// Define animation steps for the main track
for (let i = 0; i <= totalSteps; i++) {
  // Animate the text track
  trackTl.to(textTrack, {
    y: `-${i * textDistancePerStep}rem`,
    ease: "none",
    duration: 0.4,
  });

  // Animate the number track
  trackTl.to(
    numTrack,
    {
      y: `-${i * numDistancePerStep}rem`,
      ease: "none",
      duration: 0.4,
    },
    `<` // Sync with text track
  );

  const items = container.querySelectorAll(".home-hero_text-inner-wrap");
  const currentItem = items[i];
  trackTl
    .to(items, { opacity: 0.1, duration: 1, delay: 0 }, `<${1 / totalSteps}`)
    .to(currentItem, { opacity: 1, duration: 1 }, "<0%");
}

// Function to reset the main track
function resetMainTrack() {
  gsap.set(textTrack, { y: 0 });
  gsap.set(numTrack, { y: 0 });
}

// Add onComplete callback to reset the main track
trackTl.eventCallback("onComplete", resetMainTrack);

// Start the animation
trackTl.play();

////Sticky section
const timelineContent = document.querySelectorAll(".timeline_row");
const timelineImages = document.querySelectorAll(".timeline_img");

function animateElements(icon, index, iconOpacity, imageOpacity) {
  gsap.to(icon, {
    opacity: iconOpacity,
    duration: 1,
    ease: "power4.out",
  });

  timelineImages.forEach((image, i) => {
    gsap.to(image, {
      opacity: i === index ? imageOpacity : 1 - imageOpacity,
      duration: 1,
      ease: "power4.out",
    });
  });
}

timelineContent.forEach((content, index) => {
  const icon = content.querySelector(".timeline_icon-wrap");

  ScrollTrigger.create({
    trigger: content,
    start: "top 60%",
    end: "top 0%",
    onEnter: () => animateElements(icon, index, 1, 1),
    onEnterBack: () => animateElements(icon, index, 1, 1),
    onLeave: () => animateElements(icon, index, 0.3, 0),
    onLeaveBack: () => animateElements(icon, index, 0.3, 0),
  });
});

ScrollTrigger.create({
  trigger: ".timeline_component",
  start: "top 0%",
  end: "bottom 100%",
  scrub: 1,
  onUpdate: (self) => {
    gsap.to(".timeline_progress-line", {
      height: self.progress * 100 + "%",
      ease: "none",
    });
  },
});

////Horizontal scroll cards
const slider = document.querySelector(".horizontal-scroll_track");

const sliderCards = slider.querySelectorAll(".horizontal-scroll_card");
let mm = gsap.matchMedia();

const horizontalScrollTween = gsap.to(slider, {
  x: () => slider.scrollWidth * -1,
  xPercent: 100,
  ease: "none",
});
let horizTrigger = document.querySelector(".section.is-horiz-scroll");

ScrollTrigger.create({
  trigger: horizTrigger,
  start: "top 0",
  end: () =>
    "+=" + document.querySelector(".horizontal-scroll_track").offsetWidth * 2,
  animation: horizontalScrollTween,
  scrub: 1.1,
  invalidateOnRefresh: true,
  pin: true,
});

////Platforms
const pathSvgs = document.querySelectorAll(".pulse-group");

pathSvgs.forEach((svg, i) => {
  const path = svg.querySelector(".pulse-path");
  const line = svg.querySelector(".pulse-line");
  const timeToPlay = Math.floor(Math.random() * 4) + 2;
  const timeDelay = Math.floor(Math.random() * 3) + 1;

  // Set the transform origin and offsets before animating
  gsap.set(line, {
    xPercent: -50, // Center horizontally
    yPercent: -50, // Center vertically
    transformOrigin: "50% 50%", // Set the transform origin to the center
  });
  gsap.to(".pulse-line", {
    opacity: 1,
    duration: 0.5,
  });
  const tween = gsap.to(line, {
    motionPath: {
      path: path,
      align: path,
      autoRotate: true,
      alignOrigin: [0.5, 0.5],
      start: 1,
      end: 0,
    },
    delay: 0,
    duration: timeToPlay,
    repeat: -1,
    repeatDelay: timeDelay,
    ease: "none",
  });
  tween.play();
});

//////Fraud shield

//fraud_anim-img
const fraudLoopTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

const fraudLoop = document.querySelectorAll(".fraud_anim-img");
const fraudCardWidth = fraudLoop[0].offsetWidth;
//Marquee loop
for (let i = 1; i <= 3; i++) {
  fraudLoopTl.to(".fraud_anim-wrapper", {
    x: `-${i * fraudCardWidth + i * 40}px + `,
    ease: "none",
    duration: 1,
    delay: 1,
  });
}
