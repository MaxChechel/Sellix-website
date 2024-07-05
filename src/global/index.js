//Section headers
const sectionHeaders = document?.querySelectorAll(".section-header");
if (sectionHeaders.length > 0) {
  sectionHeaders.forEach((header) => {
    const tag = header.querySelector(".section-tag");
    const heading = header.querySelector("h2");
    const text = header.querySelector("p");

    ScrollTrigger.create({
      trigger: header,
      start: "top 60%",
      end: "top 40%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap
          .timeline()
          .to(tag, { opacity: 1, y: 0, duration: 0.4, ease: "power4.out" })
          .to(
            heading,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power4.out",
            },
            "<15%"
          )
          .to(
            text,
            { opacity: 1, y: 0, duration: 0.4, ease: "power4.out" },
            "<15%"
          );
      },
    });
  });
}

//Features cards
const featuresCards = document.querySelectorAll(".features-gallery_card");
if (featuresCards.length > 0) {
  featuresCards.forEach((card) => {
    let delay = card.getAttribute("data-delay");
    if (delay === null) {
      delay = 0;
    } else {
      delay = 0.1;
    }

    ScrollTrigger.create({
      trigger: card,
      start: "top 70%",
      end: "top 40%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap.timeline().to(card, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: delay,
          ease: "power4.out",
        });
      },
    });
  });
}

//Product cards
const productCards = document.querySelectorAll(".products_cms-item");
if (productCards.length > 0) {
  ScrollTrigger.create({
    trigger: ".section_products",
    start: "top 65%",
    end: "top 40%",
    invalidateOnRefresh: true,
    onEnter: () => {
      gsap.to(productCards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: { each: 0.05 },
        ease: "power4.out",
      });
    },
  });
}
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
