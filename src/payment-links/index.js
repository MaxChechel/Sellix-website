const paymentLinksTl = gsap.timeline();

paymentLinksTl
  .to(".paylinks-anim_chat-1, .paylinks-anim_chat-2, .paylinks-anim_chat-3", {
    delay: 0.5,
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "circ.out",
    stagger: { each: 0.5 },
  })
  .to(".paylinks-anim_right", {
    delay: 0.2,
    width: "50%",
    duration: 1,
    ease: "circ.out",
  })
  .to(
    ".paylinks-anim_right-img",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "circ.out",
    },
    "<70%"
  );
