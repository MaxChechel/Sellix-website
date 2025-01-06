import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");
  const isDelayed = svg.classList.contains("delayed");
  const smDelay = svg.classList.contains("sm-delay");
  const mdDelay = svg.classList.contains("md-delay");
  const lgDelay = svg.classList.contains("lg-delay");

  let delay = 0;
  let length = "0% 40%";
  if (isDelayed) {
    delay = 4.5;
  }
  if (smDelay) {
    delay = 1;
    length = "0% 10%";
  }
  if (mdDelay) {
    delay = 1.5;
    length = "0% 20%";
  }
  if (lgDelay) {
    delay = 2;
    length = "0% 30%";
  }

  const tween = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    delay: delay,
  });

  if (isReversed) {
    tween
      .fromTo(
        svg,
        { ease: "none", drawSVG: "100% 100%", duration: 3 },
        { drawSVG: length, ease: "sine.in" }
      )
      .to(svg, { drawSVG: "0% 0%", duration: 2 });
  } else {
    tween
      .fromTo(
        svg,
        { ease: "none", drawSVG: 0, duration: 3 },
        { drawSVG: length, ease: "sine.in" }
      )
      .to(svg, { drawSVG: "100% 100%", duration: 1.25 });
  }

  tween.play();
});

//Timeline

const timelineContent = document.querySelectorAll(".settle-timeline_row");
const settleAnimations = document.querySelectorAll(".settle-anim:not(.is-mob)");
function animationVisibility(i) {
  gsap.to(settleAnimations, {
    opacity: 0,
    duration: 0.5,
  });
  gsap.to(settleAnimations[i], {
    opacity: 1,
    duration: 0.5,
  });
}

timelineContent.forEach((content, index) => {
  ScrollTrigger.create({
    trigger: content,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => animationVisibility(index),
    onEnterBack: () => animationVisibility(index),
    onLeave: () => animationVisibility(index),
    onLeaveBack: () => animationVisibility(index),
  });
});