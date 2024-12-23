import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin);

const pathSvgs = document.querySelectorAll(".line-pulse");

pathSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");
  const isDelayed = svg.classList.contains("delayed");
  const smDelay = svg.classList.contains("sm-delay");
  const mdDelay = svg.classList.contains("md-delay");
  const lgDelay = svg.classList.contains("lg-delay");

  let delay = 0;
  let length = "0% 40%";
  if (isReversed) {
    length = "40% 0%";
  }
  if (isDelayed) {
    delay = 4.5;
  }
  if (smDelay) {
    length = "0% 10%";
    if (isReversed) {
      length = "10% 0%";
    }
  }
  if (mdDelay) {
    delay = 1.5;
    length = "0% 20%";
    if (isReversed) {
      length = "20% 0%";
    }
  }
  if (lgDelay) {
    delay = 2;
    length = "0% 30%";
    if (isReversed) {
      length = "30% 0%";
    }
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
        { drawSVG: length, ease: "none" }
      )
      .to(svg, { drawSVG: 0, duration: 1.25 });
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

const lineSvgs = document.querySelectorAll(".line-svg");

lineSvgs.forEach((svg) => {
  const isReversed = svg.classList.contains("reverse");

  const smDelay = svg.classList.contains("sm-delay");
  const mdDelay = svg.classList.contains("md-delay");
  const lgDelay = svg.classList.contains("lg-delay");

  let delay = 0;
  let repeatDelay = 1;

  if (smDelay) {
    delay = 1;
  }
  if (mdDelay) {
    delay = 1.5;
    repeatDelay = 1.5;
  }
  if (lgDelay) {
    delay = 2;
    repeatDelay = 2;
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

const initializeAnimation = () => {
  MotionPathPlugin.convertToPath(".orbit");
  const orbitWraps = document.querySelectorAll(".stable_orbit-wrap");

  orbitWraps.forEach((orbitWrap) => {
    let duration = 80;
    let direction = 1;

    if (orbitWrap.classList.contains("is-middle")) {
      duration = 60;
    }

    if (orbitWrap.classList.contains("is-central")) {
      duration = 40;
    }

    const circle = orbitWrap.querySelector(".orbit");
    const orbCircle = orbitWrap.querySelector(".orbit-circle");
    const items = orbitWrap.querySelectorAll(".stable_orbit-icon");

    // Clear any previous animation instances
    gsap.killTweensOf(items);

    items.forEach((item) => {
      orbitWrap.appendChild(item);
    });

    gsap.to(orbCircle, {
      rotation: 360,
      duration: duration + 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });

    // Set initial positions
    gsap.set(items, {
      motionPath: {
        path: circle,
        align: circle,
        alignOrigin: [0.5, 0.5],
      },
    });

    // Create a timeline to animate items along the path
    const tl = gsap.timeline({
      repeat: -1,
      ease: "none",
    });

    items.forEach((item, i) => {
      tl.to(
        item,
        {
          motionPath: {
            path: circle,
            align: circle,
            alignOrigin: [0.5, 0.5],
            start: i / items.length,
            end: i / items.length + direction,
            immediateRender: true,
          },
          duration: duration,
          ease: "none",
        },
        0
      );
    });
  });
};

// Initialize animation on load
initializeAnimation();

const mm = gsap.matchMedia();

mm.add("(min-width: 992px)", () => {
  const resizeHandler = () => {
    initializeAnimation();
  };

  // Add the resize event listener when the media query matches
  window.addEventListener("resize", resizeHandler);

  // Run the function initially to handle the current state
  initializeAnimation();

  // Return a cleanup function to remove the event listener when the media query no longer matches
  return () => {
    window.removeEventListener("resize", resizeHandler);
  };
});
