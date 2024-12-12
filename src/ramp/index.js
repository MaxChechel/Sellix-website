import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");

  let delay = 0;
  if (isReversed) {
    delay = 4.5;
  }

  const tween = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
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
