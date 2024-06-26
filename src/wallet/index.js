import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const graphBars = document.querySelectorAll(".graphs-group path");
const mm = gsap.matchMedia();
const barHeights = [];
const barYs = [];

const loadTl = gsap
  .timeline()
  .to(".wallet-hero_asset", {
    delay: 0.2,
    opacity: 1,
    y: 0,
  })
  .add(() => {
    graphBars.forEach((bar, i) => {
      gsap.set(bar, { drawSVG: "100% 100%", opacity: 0 });
      gsap.to(bar, {
        drawSVG: "0% 100%",
        opacity: 1,
        duration: 0.8,
        delay: 0.01 * i,
        ease: "power4.out",
      });
    });
  }, "<80%")
  .add(() => {
    spinTween();
  }, 0)
  .add(() => {
    //Graph
    new Chart(document.querySelector(".wallet-hero_ballance-graph"), {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "Popular Cereal",
            backgroundColor: [
              "#6A3CE2",
              "#E16727",
              "#239F51",
              "#DB2777",
              "#2563EB",
            ],
            data: [48, 17, 4, 20, 11],
            borderWidth: 0,
            borderRadius: 40,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 90,
        borderColor: "rgba(255,255,255,0.0)",
        legend: {
          display: false,
        },
        animation: {
          duration: 2000,
          delay: 6000,
        },
        hover: {
          mode: null,
        },
        tooltips: {
          enabled: false,
        },
      },
    });
  });

/////
const animTl = gsap.timeline({
  defaults: { ease: "none" },
  repeat: -1,
  repeatDelay: 0,
  paused: true,
});

function spinTween() {
  const maxTime = 2;
  const distance = "15";
  let measure = "rem";
  mm.add("(max-width: 991px)", () => {
    measure = "vw";
  });

  animTl
    .to(".n-1", {
      y: `-=${(distance / 10) * 5}${measure}`,
      duration: maxTime / 5,
    })
    .to(
      ".n-2",
      { y: `-=${(distance / 10) * 6}${measure}`, duration: maxTime / 10 },
      "<0%"
    )
    .to(
      ".n-3",
      { y: `-=${(distance / 10) * 8}${measure}`, duration: maxTime / 20 },
      "<0%"
    )
    .to(
      ".n-4",
      { y: `-=${(distance / 10) * 9}${measure}`, duration: maxTime / 30 },
      "<0%"
    )
    .to(
      ".n-5",
      { y: `-=${(distance / 10) * 6}${measure}`, duration: maxTime / 40 },
      "<0%"
    )
    .to(
      ".n-6",
      { y: `-=${(distance / 10) * 5}${measure}`, duration: maxTime / 50 },
      "<0%"
    );
  gsap.to(animTl, 3, { progress: 1, ease: "power3.inOut" });
}
