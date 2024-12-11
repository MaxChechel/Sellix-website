import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");
  const isDelayed = svg.classList.contains("delayed");
  const ranDelay = svg.classList.contains("ran-delay");

  let delay = 0;
  if (isDelayed) {
    delay = 4;
  }
  if (ranDelay) {
    delay = gsap.utils.random(1, 3);
  }
  const tween = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.75,
    delay: delay,
  });

  if (isReversed) {
    tween
      .fromTo(
        svg,
        { ease: "none", drawSVG: "100% 100%", duration: 2 },
        { drawSVG: "0% 100%", ease: "sine.in" }
      )
      .to(svg, { drawSVG: "0% 0%", duration: 1 });
  } else {
    tween
      .fromTo(
        svg,
        { ease: "none", drawSVG: 0, duration: 2 },
        { drawSVG: "0% 100%", ease: "sine.in" }
      )
      .to(svg, { drawSVG: "100% 100%", duration: 1 });
  }

  tween.play();
});

//Timeline

const timelineContent = document.querySelectorAll(".timeline_row");
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
