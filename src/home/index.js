import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Splitting from "splitting";
import Licences from "../home-animations/licences";
import Marketing from "../home-animations/marketing";
import Embed from "../home-animations/embed";
import Communities from "../home-animations/communities";
import HeroTicker from "../home-animations/heroTicker";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Flip);

////////////
HeroTicker();
Communities();

//Hero logo

const heroLogo = document.querySelector(".home-hero_logo-wrap");
const logoParent = document.querySelector(".home-hero_left-anim-wrap");
const logoParent1 = document.querySelector(".home-logo_parent-1");
const logoParent2 = document.querySelector(".home-logo_parent-2"); // The second container

let flipTween;

const doFlip = (target) => {
  flipTween && flipTween.kill();
  const state = Flip.getState(heroLogo);
  target.appendChild(heroLogo);
  flipTween = Flip.from(state, { duration: 0.6 });
};

ScrollTrigger.create({
  trigger: ".section_home-hero",
  start: "bottom 75%",
  end: "top 50%",
  scrub: true,
  onEnter: () => {
    doFlip(logoParent1);
  },
  onLeaveBack: () => {
    doFlip(logoParent);
  },
});

//Sellix heading section
const splitText = Splitting({ target: ".home-intro_h", by: "chars" });
const introScrollTl = gsap.timeline({});
introScrollTl
  .to(".home-intro_h.is-1 .word", {
    opacity: 0,
  })
  .to(
    ".home-intro_h.is-2 .char",
    {
      y: "0%",
      opacity: 1,
      ease: "power4.out",
      stagger: { each: 0.05 },
    },
    "30%"
  );
ScrollTrigger.create({
  trigger: ".section_home-intro",
  start: "top 0",
  end: `+=${window.innerHeight * 2}`,
  scrub: 1.1,
  pin: true,
  animation: introScrollTl,
  onUpdate: (self) => {
    if (self.progress > 0.3) {
      doFlip(logoParent2);
    }
    if (self.progress < 0.3) {
      doFlip(logoParent1);
    }
  },
});

//Logo garden
ScrollTrigger.create({
  trigger: ".section_logo-garden",
  start: "top 60%",
  end: "top 40%",
  invalidateOnRefresh: true,
  onEnter: () => {
    const tl = gsap
      .timeline()
      .to(".logo-garden_heading", { opacity: 1 })
      .to(
        ".marquee-image",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power4.out",
          stagger: { each: 0.02, from: "center" },
        },
        "<20%"
      );
  },
});

////Sticky section
const timelineContent = document.querySelectorAll(".timeline_row");
const timelineImages = document.querySelectorAll(".timeline_img:not(.is-mob)");
let timelineMm = gsap.matchMedia();

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
  start: "top 30%",
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
const horizSectionInitHeight = horizScrollSection.offsetHeight;
//horizScrollSection.setAttribute("style", `height:${slider.scrollWidth}px`);

const horizontalScrollTween = gsap.to(slider, {
  x: () => slider.scrollWidth * -1,
  xPercent: 100,
  ease: "none",
});

ScrollTrigger.create({
  trigger: horizScrollSection,
  start: "top 0",
  end: () => "+=" + slider.scrollWidth - window.innerWidth,
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
