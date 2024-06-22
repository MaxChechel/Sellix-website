import gsap from "gsap";
export default function HeroTicker() {
  // Select the main track and its containers
  const textTrack = document.querySelector(".home-hero_text-track");
  const numTrack = document.querySelector(".home-hero_num-wrap");
  const container = document.querySelector(".home-hero_text-wrap.is-middle");

  // Calculate the total number of steps (containers)
  const totalSteps = 6;
  const textDistancePerStep = 14; // Adjust as needed
  const numDistancePerStep = 8; // Adjust as needed

  // Create GSAP timeline for the main track
  const trackTl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    delay: 2,
    onComplete: () => {
      trackTl.delay(0); // Reset delay after the first cycle
    },
  });
  const items = container.querySelectorAll(".home-hero_text-inner-wrap");

  for (let i = 1; i <= totalSteps; i++) {
    // Animate the text track
    trackTl
      .to(textTrack, {
        y: `-${i * textDistancePerStep}rem`,
        ease: "circ.out",
        duration: 0.8,
      })
      .to(
        numTrack,
        {
          y: `-${i * numDistancePerStep}rem`,
          ease: "circ.out",
          duration: 0.8,
        },
        `<0%` // Sync with text track
      )
      .to([items[i - 1], items[i + 1]], { opacity: 0.1, duration: 1.6 }, "<0%")
      .to(items[i], { opacity: 1, duration: 1.6 }, "<0%");
  }
}
