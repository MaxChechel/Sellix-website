import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const circlePath = document.querySelector("#holder");
const itemsWrapper = document.querySelector(".plugins-anim_icons-wrapper");
const items = document.querySelectorAll(".plugins-anim_icon-item");
let tl; // Declare the timeline variable

items.forEach((item) => {
  itemsWrapper.appendChild(item);
});

// Function to set initial positions and animate items
function setPositions() {
  // Set initial positions
  gsap.set(items, {
    motionPath: {
      path: circlePath,
      align: circlePath,
      alignOrigin: [0.5, 0.5],
      //autoRotate: true,
    },
  });

  gsap.to(items, {
    opacity: 1,
    duration: 0.8,
  });

  // Clear existing timeline if any
  if (tl) {
    tl.kill();
  }

  // Create a new timeline to animate items along the path
  tl = gsap.timeline({
    repeat: -1,
    ease: "none",
  });

  items.forEach((item, i) => {
    tl.to(
      item,
      {
        motionPath: {
          path: circlePath,
          align: circlePath,
          alignOrigin: [0.5, 0.5],
          //autoRotate: true,
          start: i / items.length,
          end: i / items.length + 1,
          immediateRender: true,
        },
        duration: 40,
        ease: "none",
      },
      0
    );
  });
}

// Initial call to set positions
setPositions();

// Add event listener for window resize
window.addEventListener("resize", () => {
  setPositions();
});

//Modal
const pluginsLinks = document.querySelectorAll(".plugins_card-link");
const pluginsModal = document.querySelectorAll("[data-plugins-modal]");

pluginsLinks.forEach((link) => {
  const pluginsModal = link.parentElement.querySelector("[data-plugins-modal]");
  link.addEventListener("click", () => {
    pluginsModal.classList.add("is-active");
  });
});

pluginsModal.forEach((modal) => {
  const closeBtn = modal.querySelector(".modal_close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});

const pluginSections = document.querySelectorAll("[data-plugin-section]");
pluginSections.forEach((section) => {
  const heading = section.querySelector(".section-header h2");
  const text = section.querySelector(".section-header p");
  const cards = section.querySelectorAll(".plugins_card-inner-wrap");

  ScrollTrigger.create({
    trigger: section,
    start: "top 65%",
    end: "top 40%",
    invalidateOnRefresh: true,
    onEnter: () => {
      const tl = gsap
        .timeline()
        .to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power4.out",
        })
        .to(
          text,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power4.out",
          },
          "<15%"
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: { each: 0.05 },
            ease: "power4.out",
          },
          "<15%"
        );
    },
  });
});
