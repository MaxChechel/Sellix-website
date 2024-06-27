import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
export default function Embed() {
  const embedProcess = document.querySelectorAll(
    ".embed-anim_process-icon path"
  );

  const embedTl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1 });

  embedTl
    .to(".embed-anim_cursor", {
      delay: 1,
      bottom: "45%",
    })
    .to(".embed-add-btn", {
      scale: 1.02,
      duration: 0.15,
    })
    .to(".embed-add-btn", {
      scale: 1,
      duration: 0.1,
    })
    .to(".embed-anim_product-add", {
      delay: 0.2,
      height: "0px",
      opacity: 0,
    })
    .to(
      ".embed-anim_product-added",
      {
        height: "auto",
        opacity: 1,
      },
      "<0%"
    )
    .to(".embed-anim_cursor", {
      bottom: "45%",
    })
    .to(".embed-anim_cursor", {
      delay: 0.4,
      bottom: "5%",
      right: "15%",
    })
    .to(".embed-anim_checkout-btn", {
      scale: 1.01,
      duration: 0.15,
    })
    .to(".embed-anim_checkout-btn", {
      scale: 1,
      duration: 0.1,
    })
    .to(".embed-anim_top-wrap, .embed-anim_bottom-bar", {
      delay: 0.2,
      opacity: 0,
    })
    .to(".embed-anim_seconds-scene-wrap", {
      delay: 0.6,
      opacity: 1,
    })
    .to(embedProcess, {
      opacity: 1,
      stagger: { each: 0.1, from: "start" },
    })
    .add(() => {
      const progTl = gsap
        .timeline()
        .to(
          ".embed-anim_process-h-step",
          {
            text: { value: "1" },
            duration: 0.1,
            ease: "none",
          },
          "<0%"
        )
        .to(".embed-anim_process-h-step", {
          text: { value: "2" },
          delay: 0.2,
          duration: 0.2,
          ease: "none",
        })
        .to(".embed-anim_process-h-step", {
          text: { value: "3" },
          delay: 0.1,
          duration: 0.2,
          ease: "none",
        });
    }, "<0%")
    .to(
      ".embed-anim_process-icon,.embed-anim_process-h, .embed-anim_process-text",
      {
        opacity: 0,
      }
    )
    .to(".embed-anim_success-icon", {
      opacity: 1,
    })
    .to(
      ".embed-anim_process-h",
      {
        text: { value: "Your Payment is Successful" },
        duration: 0,
        ease: "none",
      },
      "<0%"
    )
    .to(
      ".embed-anim_process-text",
      {
        text: {
          value:
            "Your invoice has been paid. You will receive the confirmation email aswell, check your email!",
        },
        duration: 0,

        ease: "none",
      },
      "<0%"
    )
    .to(
      ".embed-anim_process-h, .embed-anim_process-text",
      {
        opacity: 1,
      },
      "<0%"
    )
    .to(
      ".embed-anim_back-wrap",
      {
        opacity: 1,
      },
      "<0%"
    )
    .to(".embed-anim_seconds-scene-wrap", {
      delay: 0.8,
      opacity: 0,
    })
    .to(".embed-anim_third-scene-wrap", {
      opacity: 1,
    })
    .to(".embed-anim_third-scene-wrap", {
      delay: 0.8,
      opacity: 0,
    })
    .to(".embed-anim_product-add", {
      height: "auto",
      opacity: 1,
      duration: 0,
    })
    .to(".embed-anim_product-added", {
      height: 0,
      opacity: 0,
      duration: 0,
    })
    .to(".embed-anim_cursor", {
      bottom: "10%",
      right: "10%",
      duration: 0,
    })
    .to(".embed-anim_process-h-step", {
      text: { value: "0" },
      duration: 0,
    })
    .to(".embed-anim_top-wrap, .embed-anim_bottom-bar", {
      opacity: 1,
    });
  return embedTl;
}
