import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);
const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg, i) => {
  const tween = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
  });

  tween
    .fromTo(
      svg,
      {
        ease: "none",
        drawSVG: 0,
        duration: 2,
      },
      { drawSVG: "0% 15%", ease: "sine.in" }
    )
    .to(svg, { drawSVG: "100% 100%", duration: 1 });
  tween.play();
});

//Moving icons
MotionPathPlugin.convertToPath(".stablecoins_path path");

const pathWraps = document.querySelectorAll(".stablecoins_path-wrapper");

pathWraps.forEach((pathWrap) => {
  const line = pathWrap.querySelector(".stablecoins_path path");
  const items = pathWrap.querySelectorAll(".stablecoins_icon");

  // Clear any previous animation instances
  gsap.killTweensOf(items);

  items.forEach((item) => {
    pathWrap.appendChild(item);
  });

  // Create a timeline for each path wrapper
  const tl = gsap.timeline({
    defaults: {
      duration: 2,
    },
  });

  // Animate each item with a staggered delay
  items.forEach((item, i) => {
    // Set initial position at the start of the path
    gsap.set(item, {
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.5, 0.5],
        start: 0, // Start at beginning of path
        end: 0, // Start at beginning of path
      },
    });

    // Animate to end of path with delay
    tl.to(
      item,
      {
        motionPath: {
          path: line,
          align: line,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1,
        },
        ease: "circ.out",
      },
      i * 0.2 + 2
    );
  });
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
