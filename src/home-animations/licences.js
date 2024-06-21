import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(TextPlugin, DrawSVGPlugin);
export default function Licences() {
  const licencesTl = gsap.timeline();

  licencesTl
    .to(".lic-anim_cursor", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".lic-anim_cursor", {
      bottom: "0.5rem",
      duration: 1,
      ease: "power2.out",
    })
    .to(".lic-anim_card.is-first", {
      scale: 1.01,
      duration: 0.15,
    })
    .to(".lic-anim_card.is-first", {
      scale: 1,
      duration: 0.1,
    })
    .to(".lic-anim_card:not(.is-first)", {
      delay: 0.2,
      opacity: 0,
      height: 0,
      padding: 0,
      duration: 0.5,
    })
    .to(
      ".lic-anim_card.is-first .lic-anim_card-img",
      {
        width: "6rem",
        height: "6rem",
      },
      "<0%"
    )
    .to(
      " .lic-anim_card.is-first .lic-anim_active-badge",
      {
        width: "3rem",
        height: "auto",
        opacity: 1,
      },
      "<0%"
    )
    .to(
      ".lic-anim_card-inner-right-wrap .icon-embed-xsmall",
      {
        opacity: 0,
        height: 0,
        width: 0,
      },
      "<0%"
    )
    .to(
      ".lic-anim_card-btn",
      {
        height: "auto",
        opacity: 1,
      },
      "<0%"
    )
    .to(".lic-anim_cursor", {
      delay: 0.3,
      bottom: "0rem",
      right: "0rem",
      duration: 0.8,
      ease: "power2.out",
    })
    .to(
      ".lic-anim_btn-fill",
      {
        fill: "#69707A",
        duration: 0.2,
      },
      "<75%"
    )
    .to(".lic-anim_card-btn", {
      scale: 1.01,
      duration: 0.15,
    })
    .to(".lic-anim_card-btn", {
      scale: 1,
      duration: 0.1,
    })
    .to(".lic-anim_cards-wrap", {
      opacity: 0,
      height: 0,
    })
    .to(
      ".lic-anim-input",
      {
        opacity: 1,
        height: "4rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
      },
      "<0%"
    )
    .to(".lic-anim-input", {
      borderColor: "#E0E0E0",
      duration: 0.2,
    })
    .to(
      ".lic-anim_cursor-2",
      {
        opacity: 1,
      },
      "<0%"
    )
    .add(() => {
      const cursorTl = gsap
        .timeline()
        .fromTo(
          ".lic-anim_input-line",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.75, repeat: -1, ease: "step(1)" }
        );
    })
    .to(".lic-anim-input-text", {
      text: { value: "********" },
      duration: 3,
      delay: 1,
      ease: "none",
    })
    .to(".lic-anim_cursor-2", {
      right: "0rem",
      bottom: "0rem",
    })
    .to(".lic-anim_input-btn", { scale: 1.05, duration: 0.15 })
    .to(".lic-anim_input-btn", { scale: 1, duration: 0.1 })
    .to(".lic-anim-input", {
      opacity: 0,
      overflow: "hidden",
      duration: 0.2,
    })
    .to(".lic-anim_loading-svg", {
      opacity: 1,
    })
    .fromTo(
      ".lic-anim_loading-svg path",
      {
        ease: "none",
        drawSVG: 0,
      },
      {
        drawSVG: "0% 100%",
        duration: 1,
        ease: "circ.out",
      }
    )
    .to(".lic-anim_loading-svg", {
      opacity: 0,
      scale: 0,
      duration: 0.2,
    })
    .to(
      ".lic-anim_success-svg",
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      "<30%"
    );
}
