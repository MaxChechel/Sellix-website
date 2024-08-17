import gsap from "gsap";

const graphBars = document.querySelectorAll(".graphs-group rect");

const barHeights = [];
const barYs = [];

graphBars.forEach((bar, i) => {
  const barHeight = parseFloat(bar.getAttribute("height"));
  const barY = parseFloat(bar.getAttribute("y"));
  barHeights.push(barHeight);
  barYs.push(barY);
  gsap.set(bar, {
    attr: {
      height: 0,
      y: barY + barHeight,
    },
  });
});

const heroCards = document.querySelectorAll(".fraud_hero-grid-img");
const cardsTl = gsap.timeline();
cardsTl
  .to(heroCards, {
    delay: 3.5,
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "circ.out",
    stagger: { each: 0.075 },
  })
  .add(() => {
    graphBars.forEach((bar, i) => {
      gsap.to(bar, {
        delay: 0.025 * i,
        attr: {
          height: barHeights[i],
          y: barYs[i],
        },
        duration: 0.6,
        ease: "power4.out",
      });
    });
  }, "<20%");
