import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");
  const isDelayed1 = svg.classList.contains("delayed-1");
  const isDelayed2 = svg.classList.contains("delayed-2");
  const isRepeatDel = svg.classList.contains("rep-delay");
  const isBatch1 = svg.classList.contains("batch-1");
  const isBatch2 = svg.classList.contains("batch-2");
  const isBatch3 = svg.classList.contains("batch-3");
  let delay = 0;
  let repeatDelay = 0;
  if (isDelayed1) {
    delay = 1.5;
  }
  if (isDelayed2) {
    delay = 1.5;
  }
  if (isRepeatDel) {
    repeatDelay = 1.5;
  }
  if (isBatch1) {
    repeatDelay = 7;
  }
  if (isBatch2) {
    delay = 4;
    repeatDelay = 7;
  }
  if (isBatch3) {
    delay = 5.5;
    repeatDelay = 7;
  }

  const tween = gsap.timeline({
    repeat: -1,
    repeatDelay: repeatDelay,
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
