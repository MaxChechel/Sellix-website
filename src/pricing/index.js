import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip, ScrollTrigger);

//change prices to annual billing on toggle click
const btnPriceYearly = document.querySelector("[data-price-btn=yearly]");
const btnPriceMonthly = document.querySelector("[data-price-btn=monthly]");

const ctaYearly = document.querySelectorAll(".cta-yearly");
const ctaMonthly = document.querySelectorAll(".cta-monthly");
const annualPrices = document.querySelectorAll(".pricing_card-price.is-yearly");
const monthlyPrices = document.querySelectorAll(
  ".pricing_card-price.is-monthly"
);

btnPriceYearly.addEventListener("click", () => {
  btnPriceMonthly.classList.remove("is-active");
  btnPriceYearly.classList.add("is-active");
  annualPrices.forEach((price) => (price.style.display = "block"));
  monthlyPrices.forEach((price) => (price.style.display = "none"));
  ctaYearly.forEach((cta) => (cta.style.display = "block"));
  ctaMonthly.forEach((cta) => (cta.style.display = "none"));
});
btnPriceMonthly.addEventListener("click", () => {
  btnPriceYearly.classList.remove("is-active");
  btnPriceMonthly.classList.add("is-active");
  annualPrices.forEach((price) => (price.style.display = "none"));
  monthlyPrices.forEach((price) => (price.style.display = "block"));
  ctaYearly.forEach((cta) => (cta.style.display = "none"));
  ctaMonthly.forEach((cta) => (cta.style.display = "block"));
});

//Pricing Modal
const contactPricingBtn = document.querySelector(".pricing_item-head.is-cta a");
const contactPricingModal = document.querySelector("#contact-modal-pricing");
const contactPricingClose = document.querySelector(
  "#contact-modal-pricing .modal_close-btn"
);
contactPricingBtn.addEventListener("click", () => {
  contactPricingModal.classList.add("is-active");
  document.body.style.overflow = "hidden";
});
contactPricingClose.addEventListener("click", () => {
  contactPricingModal.classList.remove("is-active");
  document.body.style.overflow = "auto";
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
    document.body.style.overflow = "hidden";
  });
});
gatewaysModals.forEach((modal) => {
  const closeBtn = modal.querySelector(".modal_close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
    document.body.style.overflow = "auto";
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

//Form submission
const pricingContactForm = document.getElementById("Pricing-Contact-Form");
const pricingСontactEndpoint =
  "https://api-internal.sellix.io/v1/sales/custom_pricing_form";
function pricingContactFormData() {
  return {
    full_name: document.getElementById("pricing_full_name").value,
    work_email: document.getElementById("pricing_work_email").value,
    website: document.getElementById("pricing_website").value,
    payment_method: document.getElementById("pricing_payment_method").value,
    business_description: document.getElementById(
      "pricing_business_description"
    ).value,
    avg_transaction_amount: document.getElementById(
      "pricing_avg_transaction_amount"
    ).value,
    expected_mrr: document.getElementById("pricing_expected_mrr").value,
    store_name: document.getElementById("pricing_store-name").value,
  };
}

function formSubmit(formElement, formDataFunc, endpointUrl) {
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const thankYouMessage =
      formElement.parentElement.querySelector(".success-message");
    // Gather the form data
    const formData = formDataFunc();
    console.log(formData);
    // Define the endpoint URL
    const endpoint = endpointUrl;

    // Make the POST request
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Hide the form and show the thank you message
        formElement.style.display = "none";
        thankYouMessage.style.display = "block";
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
formSubmit(pricingContactForm, pricingContactFormData, pricingСontactEndpoint);

//Pricing toggle links

const pricingToggleLinks = document.querySelectorAll(".button.is-toggle");
const pricingToggleShape = document.querySelector(".pricing-toggle_link-shape");
const pricingToggleMenu = document.querySelector(".pricing-toggle-component");
let hoverMm = gsap.matchMedia();

function navLinkShapePosition(links, container, shape) {
  let activeLink = null;

  // Find the initially active link
  links.forEach(function (link) {
    if (link.classList.contains("is-active")) {
      activeLink = link;
    }
  });

  // If no active link is found, set the first link as active
  if (!activeLink && links.length > 0) {
    activeLink = links[0];
    activeLink.classList.add("is-active");
  }

  // Initially position the shape on the active link
  if (activeLink) {
    activeLink.appendChild(shape);
  }

  links.forEach(function (link) {
    link.addEventListener("mouseenter", function () {
      const state = Flip.getState(shape, {
        props: "opacity",
        simple: true,
      });
      this.appendChild(shape);

      Flip.from(state, {
        absolute: true,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    link.addEventListener("click", function () {
      activeLink = this;
      links.forEach((l) => l.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });

  container.addEventListener("mouseleave", function () {
    if (activeLink) {
      const state = Flip.getState(shape, {
        props: "opacity",
        simple: true,
      });

      activeLink.appendChild(shape);

      Flip.from(state, {
        absolute: true,
        duration: 0.3,
        ease: "power2.out",
        scale: true,
      });
    }
  });
}
//hover:hover media query
hoverMm.add("(hover:hover)", () => {
  navLinkShapePosition(
    pricingToggleLinks,
    pricingToggleMenu,
    pricingToggleShape
  );
});

//not hover:hover media query
hoverMm.add("(hover:none)", () => {
  pricingToggleLinks.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });
});
//End nav links
