import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Licences from "../home-animations/licences";
import Marketing from "../home-animations/marketing";
import Embed from "../home-animations/embed";
import Communities from "../home-animations/communities";
import HeroTicker from "../home-animations/heroTicker";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Flip);

////////////
HeroTicker();
Communities();

////Sticky section
const timelineContent = document.querySelectorAll(".timeline_row");
const timelineImages = document.querySelectorAll(".timeline_img");

function animateElements(icon, index, iconOpacity = 1) {
  gsap.to(icon, {
    opacity: iconOpacity,
    duration: 1,
    ease: "power4.out",
  });

  gsap.to(timelineImages, {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });
  gsap.to(timelineImages[index], {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
  });
}

timelineContent.forEach((content, index) => {
  const icon = content.querySelector(".timeline_icon-wrap");

  ScrollTrigger.create({
    trigger: content,
    start: "top 60%",
    end: "top 0%",
    onEnter: () => animateElements(icon, index, 1),
    onEnterBack: () => animateElements(icon, index, 1),
    onLeave: () => animateElements(icon, index, 0.3),
    onLeaveBack: () => animateElements(icon, index, 0.3),
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
const horizScrollSection = document.querySelector(".section.is-horiz-scroll");
const sliderCards = slider.querySelectorAll(".horizontal-scroll_card");
horizScrollSection.setAttribute("style", `height:${slider.scrollWidth}px`);

const horizontalScrollTween = gsap.to(slider, {
  x: () => slider.scrollWidth * -1,
  xPercent: 100,
  ease: "none",
});
let horizTrigger = document.querySelector(".section.is-horiz-scroll");

ScrollTrigger.create({
  trigger: horizTrigger,
  start: "top 0",
  end: () => "+=" + slider.scrollWidth * 1,
  animation: horizontalScrollTween,
  scrub: 1.1,
  invalidateOnRefresh: true,
  //pin: true,
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
const fraudLoopTl = gsap.timeline({
  repeat: -1,
  //repeatDelay: 1,
  immediateRender: true,
});

const fraudLoop = document.querySelectorAll(".fraud_anim-img");
const fraudCardWidth = fraudLoop[1].offsetWidth;
gsap.set(".fraud_anim-wrapper", { x: 0, width: fraudCardWidth * 4 + 120 });
//Marquee loop
for (let i = 1; i <= 3; i++) {
  fraudLoopTl
    .to(".fraud_anim-wrapper", {
      translateX: `-${Math.round(i * fraudCardWidth + i * 40)}`,
      ease: "power2.out",
      duration: 1.4,
      delay: 1,
    })
    .to(
      fraudLoop[i],
      {
        scale: 1,
        duration: 1,
        ease: "none",
      },
      "<0%"
    )
    .to(
      [fraudLoop[i - 1], fraudLoop[i + 1]],
      {
        scale: 0.9,
        duration: 1,
        ease: "none",
      },
      "<0%"
    );
}

const mainLicencesTl = Licences();
ScrollTrigger.create({
  trigger: ".features-gallery_card.is-lic",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainLicencesTl.play(),
  onLeave: () => mainLicencesTl.pause(),
  onEnterBack: () => mainLicencesTl.play(),
  onLeaveBack: () => mainLicencesTl.pause(),
});

const mainEmbedTl = Embed();
ScrollTrigger.create({
  trigger: ".features-gallery_card.is-embed",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainEmbedTl.play(),
  onLeave: () => mainEmbedTl.pause(),
  onEnterBack: () => mainEmbedTl.play(),
  onLeaveBack: () => mainEmbedTl.pause(),
});

const mainMarketTl = Marketing();
ScrollTrigger.create({
  trigger: ".features-gallery_card.is-marketing",
  start: "top 50%",
  end: "bottom 50%",
  invalidateOnRefresh: true,
  onEnter: () => mainMarketTl.play(),
  onLeave: () => mainMarketTl.pause(),
  onEnterBack: () => mainMarketTl.play(),
  onLeaveBack: () => mainMarketTl.pause(),
});
