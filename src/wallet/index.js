import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
const graphBars = document.querySelectorAll(".graphs-group path");

const barHeights = [];
const barYs = [];

graphBars.forEach((bar, i) => {
  gsap.set(bar, { drawSVG: "100% 100%", opacity: 0 });
  gsap.to(bar, {
    drawSVG: "0% 100%",
    opacity: 1,
    duration: 0.6,
    delay: 0.01 * i,
    ease: "power4.out",
  });
  // const barHeight = parseFloat(bar.getAttribute("height"));
  // const barY = parseFloat(bar.getAttribute("y"));
  // barHeights.push(barHeight);
  // barYs.push(barY);
  // gsap.set(bar, {
  //   attr: {
  //     height: 0,
  //     y: barY + barHeight,
  //   },
  // });
});

// const heroCards = document.querySelectorAll(".fraud_hero-grid-img");
// const cardsTl = gsap.timeline();
// cardsTl
//   .to(heroCards, {
//     delay: 0.5,
//     opacity: 1,
//     y: 0,
//     duration: 0.6,
//     ease: "circ.out",
//     stagger: { each: 0.075 },
//   })
//   .add(() => {
//     graphBars.forEach((bar, i) => {
//       gsap.to(bar, {
//         delay: 0.025 * i,
//         attr: {
//           height: barHeights[i],
//           y: barYs[i],
//         },
//         duration: 0.6,
//         ease: "power4.out",
//       });
//     });
//   }, "<20%");
