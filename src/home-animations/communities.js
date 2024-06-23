import gsap from "gsap";

export default function Communities() {
  const items = document.querySelectorAll(".comm-anim_item-wrap");
  const emptyItems = document.querySelectorAll(".comm-anim_item-blank");
  const container = document.querySelector(".comm-anim");
  let mm = gsap.matchMedia();
  //Initial reveal animation

  const revealTl = gsap.timeline();
  revealTl
    .from(items, {
      width: 0,
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      duration: 0.6,
      ease: "power4.out",
    })
    .to(
      [items, emptyItems],
      {
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: { each: 0.025, from: "center" },
      },
      "<0%"
    );
  mm.add("(hover: hover)", () => {
    items.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        // Scale the hovered item
        gsap.to(item, { scale: 1.2, duration: 0.3 });

        // Scale the previous and next items
        if (index > 0) {
          gsap.to(items[index - 1], { scale: 1.15, duration: 0.3 });
        }
        if (index > 1) {
          gsap.to(items[index - 2], { scale: 1.1, duration: 0.3 });
        }
        if (index < items.length - 1) {
          gsap.to(items[index + 1], { scale: 1.15, duration: 0.3 });
        }
        if (index < items.length - 2) {
          gsap.to(items[index + 2], { scale: 1.1, duration: 0.3 });
        }
      });

      item.addEventListener("mouseleave", () => {
        // Reset the scale of all items
        gsap.to(items, { scale: 1, duration: 0.3 });
      });
    });

    // Add mouse move event listener to the container
    container.addEventListener("mousemove", (e) => {
      const containerRect = container.getBoundingClientRect();
      const offsetX = (e.clientX - containerRect.left) / containerRect.width;
      const offsetY = (e.clientY - containerRect.top) / containerRect.height;

      // Calculate the translation for each item
      const translateAmountX = (offsetX - 0.5) * 10; // Adjust the multiplier for desired effect
      const translateAmountY = (offsetY - 0.5) * 10; // Adjust the multiplier for desired effect

      gsap.to([items, emptyItems], {
        x: translateAmountX,
        y: translateAmountY,
        duration: 0.3,
        stagger: { each: 0.05 },
      });
    });
  });
}
