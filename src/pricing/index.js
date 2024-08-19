import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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

//Form submission
const pricingContactForm = document.getElementById("Pricing-Contact-Form");
const pricingСontactEndpoint =
  "https://api-internal.sellix.io/v1/sales/custom_pricing_form";
function pricingContactFormData() {
  return {
    full_name: pricingContactForm.getElementById("pricing_full_name").value,
    work_email: pricingContactForm.getElementById("pricing_work_email").value,
    website: pricingContactForm.getElementById("pricing_website").value,
    payment_method: pricingContactForm.getElementById("pricing_payment_method")
      .value,
    business_description: pricingContactForm.getElementById(
      "pricing_business_description"
    ).value,
    avg_transaction_amount: pricingContactForm.getElementById(
      "pricing_avg_transaction_amount"
    ).value,
    expected_mrr: pricingContactForm.getElementById("pricing_expected_mrr")
      .value,
    store_name: pricingContactForm.getElementById("pricing_store-name").value,
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
