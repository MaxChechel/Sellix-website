import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Pricing Modal
const contactPricingBtn = document.querySelector(".pricing_item-head.is-cta a");
const contactPricingModal = document.querySelector("#contact-modal-pricing");
const contactPricingClose = document.querySelector(
  "#contact-modal-pricing .modal_close-btn"
);
contactPricingBtn.addEventListener("click", () => {
  contactPricingModal.classList.add("is-active");
});
contactPricingClose.addEventListener("click", () => {
  contactPricingModal.classList.remove("is-active");
});

const heroCards = document.querySelectorAll(
  ".pricing_inner-wrap, .pricing_banner"
);
gsap.to(heroCards, {
  delay: 3.4,
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "circ.out",
  stagger: { each: 0.075 },
});
///Gateways modal
const gatewaysLinks = document.querySelectorAll(".gateways_item-link");
const gatewaysModals = document.querySelectorAll(".modal[data-gateway-modal]");

gatewaysLinks.forEach((link) => {
  const slug = link.getAttribute("data-gateway");
  const modal = document.querySelector(`.modal[data-gateway-modal="${slug}"]`);

  link.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("is-active");
  });
});
gatewaysModals.forEach((modal) => {
  const slug = modal.getAttribute("data-gateway-modal");
  const cardsContainer = modal.querySelector(".gateway-modal_cards-container");
  fetch("/gateways/" + slug)
    .then((response) => response.text())
    .then(function (data) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const cards = tempDiv.querySelector(".gateway-modal_cards-wrap");
      cardsContainer.appendChild(cards);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });

  const closeBtn = modal.querySelector(".modal_close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
});

const gatewaysSections = document.querySelectorAll(".gateways_wrapper");
gatewaysSections.forEach((section) => {
  const heading = section.querySelector("h3");
  const cards = section.querySelectorAll(".gateways_item");

  ScrollTrigger.create({
    trigger: section,
    start: "top 65%",
    end: "top 40%",
    invalidateOnRefresh: true,
    onEnter: () => {
      const tl = gsap
        .timeline()
        .to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power4.out",
        })
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: { each: 0.02 },
            ease: "power4.out",
          },
          "<15%"
        );
    },
  });
});
