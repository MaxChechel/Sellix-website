const licencesTl = gsap.timeline();

licencesTl
  .to(".licenses_anim-input-wrap", {
    delay: 0.2,
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "circ.out",
  })
  .to(
    ".licenses_anim-cards-wrap",
    {
      opacity: 1,
      duration: 0.4,
      ease: "circ.out",
    },
    "<30%"
  )
  .to(
    ".licenses_anim-cards-img",
    {
      y: 0,
      duration: 0.6,
      ease: "circ.out",
      stagger: { each: 0.025, from: "start" },
      onComplete: () => {
        const glowTl = gsap
          .timeline({ repeat: -1 })
          .to(".licenses_anim-input-glow", { opacity: 1, duration: 1.4 })
          .to(".licenses_anim-input-glow", { opacity: 0, duration: 0.8 });
      },
    },
    "<0%"
  );
