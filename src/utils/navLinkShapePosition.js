import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function navLinkShapePosition(links, container, shape) {
  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      const state = Flip.getState(shape, {
        props: "opacity",
        simple: true,
      });
      shape.classList.add("is-active");

      this.appendChild(shape);

      Flip.from(state, {
        absolute: true,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  container.addEventListener("mouseleave", function () {
    const state = Flip.getState(shape, {
      props: "opacity",
      simple: true,
    });
    shape.classList.remove("is-active");
    Flip.from(state, {
      absolute: true,
      duration: 0.3,
      ease: "power2.out",
      scale: true,
    });
  });
}
