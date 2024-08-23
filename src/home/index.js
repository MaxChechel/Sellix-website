import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Licences from "../home-animations/licences";
import Embed from "../home-animations/embed";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Flip);

//Nav color change
const navbar = document.querySelector(".navbar_component");
const navHeight = navbar.offsetHeight;
const navTl = gsap.timeline();

navTl.to(navbar, {
  scrollTrigger: {
    trigger: navbar,
    start: `+=1`,
    toggleActions: "play none none reverse",
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to(navbar, {
        duration: 0,
        ease: "none",
        "--navbar-gradient-color": "rgba(20, 20, 20, 1)",
      });
    },
    onLeaveBack: () => {
      gsap.to(navbar, {
        duration: 0,
        ease: "none",
        "--navbar-gradient-color": "rgba(20, 20, 20, 0)",
      });
    },
  },
});

// dotLottie
// const canvas = document.querySelector(".dotlottie-canvas");
// const lottieUrl =
//   "https://uploads-ssl.webflow.com/668fb992781d015f5555961f/66bdae719046407196ab6093_sellix_lottie_FIX.lottie";
// canvas.style.display = "none";
// const initializeLottie = () => {
//   console.log("Initializing Lottie");
//   const dotLottie = new DotLottie({
//     canvas,
//     src: lottieUrl,
//     autoplay: false,
//   });

//   dotLottie.addEventListener("load", () => {
//     const initialFrame = 4;
//     dotLottie.setFrame(initialFrame);
//     canvas.style.display = "block";
//     canvas.style.opacity = 1;
//     handleLoad(dotLottie);
//   });

//   dotLottie.addEventListener("error", (error) => {
//     console.error("Error loading dotLottie animation:", error);
//   });
// };

// const handleLoad = (dotLottie) => {
//   gsap.registerPlugin(ScrollTrigger);

//   const initialFrame = 4;

//   ScrollTrigger.create({
//     trigger: ".home-intro_lottie-wrap",
//     start: "top 50%",
//     end: "bottom bottom",
//     scrub: 1.2,
//     onUpdate: (self) => {
//       const totalFrames = dotLottie.totalFrames;
//       const scrollProgress = self.progress;
//       const currentFrame = Math.max(
//         Math.floor(scrollProgress * totalFrames),
//         initialFrame
//       );
//       dotLottie.setFrame(currentFrame);
//     },
//   });
// };

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         initializeLottie();
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     rootMargin: "0px 0px 50px 0px",
//   }
// );

// const targetElement = document.querySelector(".home-intro_lottie-wrap");
// observer.observe(targetElement);

//Intro sections
const introSections = document.querySelectorAll(".home-intro_inner-wrap");
// Set initial opacity for all sections
gsap.set(".home-intro_heading-wrap, .home-intro_bottom-wrap", {
  opacity: 0.3,
});
introSections.forEach((section) => {
  const topContent = section.querySelector(".home-intro_heading-wrap");
  const bottomContent = section.querySelector(".home-intro_bottom-wrap");

  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    end: "bottom 50%",
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to(".home-intro_heading-wrap, .home-intro_bottom-wrap", {
        opacity: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to([topContent, bottomContent], {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    onEnterBack: () => {
      gsap.to(".home-intro_heading-wrap, .home-intro_bottom-wrap", {
        opacity: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to([topContent, bottomContent], {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    onLeave: () => {
      gsap.to([topContent, bottomContent], {
        opacity: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    onLeaveBack: () => {
      gsap.to([topContent, bottomContent], {
        opacity: 0.3,
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
    const tl = gsap.timeline().to(
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

////Sticky section with videos
// const userAgent = navigator.userAgent.toLowerCase();
// const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent); // Safari on macOS and iOS
// const isIOS =
//   /ipad|iphone|ipod/.test(userAgent) ||
//   (userAgent.includes("mac") && "ontouchend" in document); // iOS

// const timelineContent = document.querySelectorAll(".timeline_row");
// let videos = document.querySelectorAll(
//   ".timeline_videos-inner-wrap .timeline_video .video"
// );
// let videosWrap = document.querySelectorAll(
//   ".timeline_videos-inner-wrap .timeline_video"
// );

// function videoListner(video) {
//   console.log("Video ended");
//   video.setAttribute("playedonce", true);
//   video.currentTime = 2;
//   video.play();
// }

// let timelineMm = gsap.matchMedia();
// timelineMm.add("(min-width: 768px)", () => {
//   document.querySelectorAll(".timeline_mobile-img-wrap").forEach((el) => {
//     el.remove();
//   });
// });
// timelineMm.add("(max-width: 767px)", () => {
//   document.querySelector(".timeline_videos-inner-wrap").remove();
//   videos = document.querySelectorAll(
//     ".timeline_mobile-img-wrap .timeline_video .video"
//   );
//   videosWrap = document.querySelectorAll(
//     ".timeline_mobile-img-wrap .timeline_video"
//   );
// });
// gsap.set(videosWrap, { opacity: 0 });
// videos.forEach((video) => {
//   const webpSource = video.querySelector("source[type='video/webm']");
//   const quicktimeSource = video.querySelector("source[type='video/quicktime']");
//   // Set the appropriate source based on the browser or device
//   if (isSafari || isIOS) {
//     // Remove the webp source if Safari or iOS
//     if (webpSource) {
//       webpSource.remove();
//     }
//   } else {
//     // Remove the quicktime source if not Safari or iOS
//     if (quicktimeSource) {
//       quicktimeSource.remove();
//     }
//   }

//   video.pause();

//   video.setAttribute("playedonce", false);

//   video.addEventListener("ended", () => videoListner(video));
// });
// function animateElements(icon, index, iconOpacity = 1) {
//   gsap.to(icon, {
//     opacity: iconOpacity,
//     duration: 1,
//     ease: "power4.out",
//   });

//   gsap.to(videosWrap, {
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out",
//   });
//   gsap.to(videosWrap[index], {
//     opacity: 1,
//     duration: 1,
//     ease: "power4.out",
//   });

//   // Play current video
//   videos[index].play();
//   video[index].addEventListener("ended", () => videoListner(video[index]));

//   // Pause all other videos
//   videos.forEach((video, videoIndex) => {
//     if (videoIndex !== index) {
//       video.pause();
//       video.removeEventListener("ended", () => videoListner(video));
//     }
//   });
// }

// timelineContent.forEach((content, index) => {
//   const icon = content.querySelector(".timeline_icon-wrap");

//   ScrollTrigger.create({
//     trigger: content,
//     start: "top 60%",
//     end: "top 0%",
//     onEnter: () => animateElements(icon, index, 1),
//     onEnterBack: () => animateElements(icon, index, 1),
//     onLeave: () => animateElements(icon, index, 0.3),
//     onLeaveBack: () => animateElements(icon, index, 0.3),
//   });
// });
const userAgent = navigator.userAgent.toLowerCase();
const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent); // Safari on macOS and iOS
const isIOS =
  /ipad|iphone|ipod/.test(userAgent) ||
  (userAgent.includes("mac") && "ontouchend" in document); // iOS

const timelineContent = document.querySelectorAll(".timeline_row");
let videos = document.querySelectorAll(
  ".timeline_videos-inner-wrap .timeline_video .video"
);
let videosWrap = document.querySelectorAll(
  ".timeline_videos-inner-wrap .timeline_video"
);

function videoListner(video) {
  console.log("Video ended");
  console.log(video);
  video.setAttribute("playedonce", true);
  video.currentTime = 2;
  video.play();
}

function handleEndedEvent(e) {
  videoListner(e.target);
}

function addVideoListeners() {
  videos.forEach((video) => {
    const webpSource = video.querySelector("source[type='video/webm']");
    const quicktimeSource = video.querySelector(
      "source[type='video/quicktime']"
    );

    // Set the appropriate source based on the browser or device
    if (isSafari || isIOS) {
      if (webpSource) {
        webpSource.remove();
      }
    } else {
      if (quicktimeSource) {
        quicktimeSource.remove();
      }
    }

    video.pause();
    video.setAttribute("playedonce", false);

    // Add event listener for video end
    video.addEventListener("ended", handleEndedEvent);
  });
}

function removeVideoListeners() {
  videos.forEach((video) => {
    video.removeEventListener("ended", handleEndedEvent);
  });
}

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

  // Remove listeners from all other videos
  videos.forEach((video, videoIndex) => {
    if (videoIndex !== index) {
      video.pause();
      video.removeEventListener("ended", handleEndedEvent);
    }
  });

  // Add listener to the currently active video
  videos[index].addEventListener("ended", handleEndedEvent);
}

let timelineMm = gsap.matchMedia();
timelineMm.add("(min-width: 768px)", () => {
  document.querySelectorAll(".timeline_mobile-img-wrap").forEach((el) => {
    el.remove();
  });
  videos = document.querySelectorAll(
    ".timeline_videos-inner-wrap .timeline_video .video"
  );
  videosWrap = document.querySelectorAll(
    ".timeline_videos-inner-wrap .timeline_video"
  );
  addVideoListeners();
});
timelineMm.add("(max-width: 767px)", () => {
  document.querySelector(".timeline_videos-inner-wrap").remove();
  videos = document.querySelectorAll(
    ".timeline_mobile-img-wrap .timeline_video .video"
  );
  videosWrap = document.querySelectorAll(
    ".timeline_mobile-img-wrap .timeline_video"
  );
  addVideoListeners();
});

// Initial setup
addVideoListeners();
gsap.set(videosWrap, { opacity: 0 });

timelineContent.forEach((content, index) => {
  const icon = content.querySelector(".timeline_icon-wrap");

  ScrollTrigger.create({
    trigger: content,
    start: "top 35%",
    end: "bottom 80%",
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

////Horizontal scroll cards
// const slider = document.querySelector(".horizontal-scroll_track");
// const horizScrollSection = document.querySelector(".section.is-horiz-scroll");

// const horizontalScrollTween = gsap.to(slider, {
//   x: () => slider.scrollWidth * -1,
//   xPercent: 100,
//   ease: "none",
// });

// ScrollTrigger.create({
//   trigger: horizScrollSection,
//   start: "top top",
//   end: () => "+=" + slider.scrollWidth - window.innerWidth,
//   animation: horizontalScrollTween,
//   scrub: 1.2,
//   invalidateOnRefresh: true,
//   pin: true,
// });
