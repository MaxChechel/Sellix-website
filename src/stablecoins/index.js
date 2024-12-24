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

  const accStep1 = svg.classList.contains("acc-step-1");
  const accStep2 = svg.classList.contains("acc-step-2");
  const accStep3 = svg.classList.contains("acc-step-3");
  const accStep4 = svg.classList.contains("acc-step-4");
  const accStep5 = svg.classList.contains("acc-step-5");
  const accStep6 = svg.classList.contains("acc-step-6");

  const transStep1 = svg.classList.contains("trans-step-1");
  const transStep2 = svg.classList.contains("trans-step-2");
  const transStep3 = svg.classList.contains("trans-step-3");
  const transStep4 = svg.classList.contains("trans-step-4");
  const transStep5 = svg.classList.contains("trans-step-5");
  const transStep6 = svg.classList.contains("trans-step-6");

  const payStep1 = svg.classList.contains("pay-step-1");
  const payStep2 = svg.classList.contains("pay-step-2");
  const payStep3 = svg.classList.contains("pay-step-3");
  const payStep4 = svg.classList.contains("pay-step-4");
  const payStep5 = svg.classList.contains("pay-step-5");
  const payStep6 = svg.classList.contains("pay-step-6");
  const payStep7 = svg.classList.contains("pay-step-7");
  const payStep8 = svg.classList.contains("pay-step-8");
  const payStep9 = svg.classList.contains("pay-step-9");

  const smDelay = svg.classList.contains("sm-delay");
  const mdDelay = svg.classList.contains("md-delay");
  const lgDelay = svg.classList.contains("lg-delay");
  const xlDelay = svg.classList.contains("xl-delay");

  let delay = 0;
  let repeatDelay = 1.5;

  if (transStep1) {
    repeatDelay = 5;
  }
  if (transStep2) {
    repeatDelay = 5;
    delay = 1;
  }
  if (transStep3) {
    repeatDelay = 5;
    delay = 2;
  }
  if (transStep4) {
    repeatDelay = 5;
    delay = 3;
  }
  if (transStep5) {
    repeatDelay = 5;
    delay = 4;
  }
  if (transStep6) {
    repeatDelay = 5;
    delay = 5;
  }

  if (accStep1) {
    repeatDelay = 6;
  }
  if (accStep2) {
    repeatDelay = 6;
    delay = 1;
  }
  if (accStep3) {
    repeatDelay = 6;
    delay = 2;
  }
  if (accStep4) {
    repeatDelay = 6;
    delay = 3;
  }
  if (accStep5) {
    repeatDelay = 6;
    delay = 4;
  }
  if (accStep6) {
    repeatDelay = 6;
    delay = 5;
  }

  if (payStep1) {
    repeatDelay = 8;
  }
  if (payStep2) {
    repeatDelay = 8;
    delay = 1;
  }
  if (payStep3) {
    repeatDelay = 8;
    delay = 2;
  }
  if (payStep4) {
    repeatDelay = 8;
    delay = 3;
  }
  if (payStep5) {
    repeatDelay = 8;
    delay = 4;
  }
  if (payStep6) {
    repeatDelay = 8;
    delay = 5;
  }
  if (payStep7) {
    repeatDelay = 8;
    delay = 6;
  }
  if (payStep8) {
    repeatDelay = 8;
    delay = 7;
  }
  if (payStep9) {
    repeatDelay = 8;
    delay = 8;
  }

  if (smDelay) {
    delay = 1;
  }
  if (mdDelay) {
    delay = 2;
    repeatDelay = 2;
  }
  if (lgDelay) {
    delay = 3;
    repeatDelay = 3;
  }
  if (xlDelay) {
    delay = 3;
    repeatDelay = 3;
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
    let lineDuration = 60;
    let direction = 1;
    let lineDirection = 360;

    if (orbitWrap.classList.contains("is-middle")) {
      duration = 60;
      lineDuration = 40;
      direction = -1;
      lineDirection = -360;
    }

    if (orbitWrap.classList.contains("is-central")) {
      duration = 40;
      lineDuration = 20;
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
      rotation: lineDirection,
      duration: lineDuration,
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
