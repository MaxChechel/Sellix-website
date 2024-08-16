const lottieUrl =
  "https://uploads-ssl.webflow.com/668fb992781d015f5555961f/66bdae719046407196ab6093_sellix_lottie_FIX.lottie";
function initializeDotLottie(canvasElement, lottieUrl) {
  // Initialize dotLottie
  const dotLottie = new DotLottie({
    autoplay: false,
    loop: false,
    canvas: canvasElement,
    src: lottieUrl,
  });

  dotLottie
    .load()
    .then(() => {
      // Once loaded, set up ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".home-intro_lottie-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const scrollProgress = self.progress.toFixed(3);
          const totalFrames = dotLottie.totalFrames;
          const currentFrame = Math.floor(scrollProgress * totalFrames);
          dotLottie.goToAndStop(currentFrame, true);
        },
      });
    })
    .catch((error) => {
      console.error("Error loading dotLottie animation:", error);
    });
}

// Intersection Observer to lazy load dotLottie animations
const lottieObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const canvas = entry.target.querySelector(".dotlottie-canvas");
      const lottieUrl = entry.target.getAttribute("data-lottie-url");
      initializeDotLottie(canvas, lottieUrl);
      observer.unobserve(entry.target); // Stop observing after loading
    }
  });
});

// Observe all elements with class 'lottie-wrapper'
document.querySelectorAll(".home-intro_lottie").forEach((container) => {
  lottieObserver.observe(container);
});
