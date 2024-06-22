import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
export default function Marketing() {
  const marketingTl = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 1,
  });

  marketingTl
    .to(".market-anim_cursor", {
      delay: 1,
      bottom: "1rem",
    })
    .to(".market-anim_card-btn", {
      scale: 1.02,
      duration: 0.15,
    })
    .to(".market-anim_card-btn", {
      scale: 1,
      duration: 0.1,
    })
    .to(".market-anim_cards-wrap", {
      delay: 0.4,
      opacity: 0,
    })
    .to(".market-anim_btn-add", {
      delay: 0.2,
      opacity: 1,
    })
    .fromTo(
      ".market-anim_btn-add-load path",
      {
        ease: "none",
        drawSVG: 0,
      },
      {
        drawSVG: "0% 100%",
        duration: 1,
        ease: "circ.out",
      },
      "<0%"
    )
    .to(".market-anim_btn-add-load", {
      width: "0rem",
      opacity: 0,
    })
    .to(".market-anim_btn-add-inner-wrap", {
      opacity: 1,
      width: "auto",
    })
    .to(".market-anim_scene-1", {
      delay: 1,
      opacity: 0,
    })
    .to(".market-anim_scene-2", {
      delay: 0.4,
      opacity: 1,
    })
    .to(".market-anim_rating-cursor", {
      bottom: "6rem",
      right: "0rem",
    })
    .to(".market-anim_rating-stars path", {
      stroke: "#FFC403",
      fill: "#FFC403",
      duration: 0.2,
    })
    .to(".market-anim_rating-stars", {
      scale: 1.02,
      duration: 0.15,
    })
    .to(".market-anim_rating-stars", {
      scale: 1,
      duration: 0.1,
    })
    .to(".market-anim_rating-cursor", {
      delay: 0.3,
      bottom: "3rem",
      right: "4rem",
    })
    .to(".market-anim_rating-btn", {
      scale: 1.02,
      duration: 0.15,
    })
    .to(".market-anim_rating-btn", {
      scale: 1,
      duration: 0.1,
    })
    .to(".market-anim_rating-wrap, .market-anim_bottom-wrap", {
      opacity: 0,
    })
    .to(".market-anim_rating-success-wrap", {
      delay: 0.4,
      opacity: 1,
    });
  return marketingTl;
}
