import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import Licences from "../home-animations/licences";
import Embed from "../home-animations/embed";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Flip);

// dotLottie
const canvas = document.querySelector(".dotlottie-canvas");
const lottieUrl =
  "https://uploads-ssl.webflow.com/668fb992781d015f5555961f/66bdae719046407196ab6093_sellix_lottie_FIX.lottie";

// Define a function to handle animation loading and ScrollTrigger setup
const handleLoad = () => {
  gsap.registerPlugin(ScrollTrigger);

  const initialFrame = 4; // Set the initial frame you want to start from

  ScrollTrigger.create({
    trigger: ".home-intro_lottie-wrap",
    start: "top 50%",
    end: "bottom bottom",
    scrub: 1.2,
    onUpdate: (self) => {
      const totalFrames = dotLottie.totalFrames;
      const scrollProgress = self.progress;
      const currentFrame = Math.max(
        Math.floor(scrollProgress * totalFrames),
        initialFrame
      ); // Ensure frame doesn't go below initialFrame
      dotLottie.setFrame(currentFrame); // Use setFrame instead of goToAndStop
    },
  });
};

const dotLottie = new DotLottie({
  canvas,
  src: lottieUrl,
  autoplay: false,
});

// Listen for the 'load' event to set up ScrollTrigger
dotLottie.addEventListener("load", () => {
  console.log("Lottie loaded");
  const initialFrame = 4; // Set the initial frame you want to start from
  dotLottie.setFrame(initialFrame); // Set initial frame
  handleLoad(); // Call the function, don't just reference it
  console.log("ScrollTrigger created");
});

// Handle potential errors during loading
dotLottie.addEventListener("error", (error) => {
  console.error("Error loading dotLottie animation:", error);
});

//Intro sections
const introSections = document.querySelectorAll(".home-intro_inner-wrap");
introSections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 60%",
    end: "bottom 50%",
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to(introSections, {
        opacity: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(section, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      gsap.to(introSections, {
        opacity: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(section, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
  });
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
const videos = document.querySelectorAll(".timeline_videos-cms-item .video");
const videosWrap = document.querySelectorAll(".timeline_videos-cms-item");
let timelineMm = gsap.matchMedia();
videos.forEach((video) => {
  video.pause();
});
function animateElements(icon, index, iconOpacity = 1) {
  gsap.to(icon, {
    opacity: iconOpacity,
    duration: 1,
    ease: "power4.out",
  });

  gsap.to(videosWrap, {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  });
  gsap.to(videosWrap[index], {
    opacity: 1,
    duration: 1,
    ease: "power4.out",
  });

  // Play current video
  videos[index].play();

  // Pause all other videos
  videos.forEach((video, videoIndex) => {
    if (videoIndex !== index) {
      video.pause();
    }
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
  scrub: 1.2,
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
  scrub: 1.2,
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
