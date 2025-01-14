import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

//Window to top on page refresh
let isRefreshing = false;
window.addEventListener("beforeunload", function () {
  isRefreshing = true;
});
window.addEventListener("unload", function () {
  if (isRefreshing) {
    window.scrollTo(0, 0);
  }
});

//Loader
// Function to initialize the MutationObserver
function initializeObserver() {
  // Select the loader element
  const loader = document.querySelector(".loader");

  // Return early if no loader element is found
  if (!loader) {
    console.error(".loader element not found");
    return;
  }

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
      // Check if the opacity has changed to 0
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style" &&
        getComputedStyle(loader).opacity === "0"
      ) {
        // Make .loader non-interactive
        loader.style.pointerEvents = "none";
        // Allow body to scroll
        document.body.style.overflow = "auto";
        // Disconnect the observer as we no longer need it
        loaderObserver.disconnect();
        break;
      }
    }
  };

  // Create an instance of MutationObserver with the callback function
  const loaderObserver = new MutationObserver(callback);

  // Configuration of the observer to watch for attribute changes
  const config = {
    attributes: true, // Watch for attribute changes
    attributeFilter: ["style"], // Only watch the 'style' attribute
  };

  // Start observing the loader element for configured mutations
  loaderObserver.observe(loader, config);
}

// Run the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeObserver);

// document.querySelector("body").style.overflow = "hidden";
// const loaderTl = gsap.timeline();
// loaderTl
//   .to(".loader_logo, .loader_spinner", {
//     duration: 0.6,
//     opacity: 1,
//     ease: "power4.out",
//   })
//   .to(
//     ".loader_spinner",
//     {
//       rotate: "360deg",
//       duration: 1.6,
//       ease: "none",
//       repeat: -1,
//     },
//     0
//   )
//   .to(
//     ".loader",
//     {
//       duration: 0.5,
//       opacity: 0,
//       ease: "power4.out",
//       pointerEvents: "none",
//     },
//     3
//   )
//   .add(() => {
//     document.querySelector("body").style.overflow = "auto";
//   });

gsap.registerPlugin(Flip, ScrollTrigger);

//Nav links
let hoverMm = gsap.matchMedia();
function navLinkShapePosition(links, container, shape) {
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

const navLinks = document.querySelectorAll(
  ".navbar_dropdown-toggle, .navbar_link"
);
const navDdLinks = document.querySelectorAll(".navbar_dropdown-link-2");
const navLinkShape = document.querySelector(".navbar_link-shape");
const navMenu = document.querySelector(".navbar_menu");
const navDdLinkShape = document.querySelector(".navbar_dd-link-shape");
const navDdMenu = document.querySelector(".navbar_container-2");

hoverMm.add("(hover:hover)", () => {
  navLinkShapePosition(navLinks, navMenu, navLinkShape);
  //navLinkShapePosition(navDdLinks, navDdMenu, navDdLinkShape);
});
//End nav links

//Contact modal
const formSuccessWrap = document.querySelector(".success-message");

// Callback function to close modal after successfull submit
const mutationCallback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "style") {
      // Check if the style of success has been changed
      if (formSuccessWrap.style.getPropertyValue("display") === "block") {
        setTimeout(() => {
          contactSaleModal.classList.remove("is-active");
          document.querySelector("body").style.overflow = "auto";
        }, 15000);
        observer.disconnect();
      }
    }
  }
};
const observer = new MutationObserver(mutationCallback);

// Options for the observer (which mutations to observe)
const observerOptions = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["style"],
};

const contactSalesBtn = document.querySelectorAll("[data-contact-sales]");
const contactSaleModal = document.querySelector("#contact-modal");
const contactSaleClose = document.querySelector(
  "#contact-modal .modal_close-btn"
);
contactSalesBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    contactSaleModal.classList.add("is-active");
    document.querySelector("body").style.overflow = "hidden";
    //observer.observe(formSuccessWrap, observerOptions);
  });
});
contactSaleClose.addEventListener("click", () => {
  contactSaleModal.classList.remove("is-active");
  document.querySelector("body").style.overflow = "auto";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.classList.remove("is-active");
      document.querySelector("body").style.overflow = "auto";
    });
  }
});

// Event listener for closing modals by clicking outside of them
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal_inner-wrap");
    if (isOutside) {
      modal.classList.remove("is-active");
      document.querySelector("body").style.overflow = "auto";
    }
  });
});

//End contact modal

const contactForm = document.getElementById("wf-form-General-Contact-Form");
const contactEndpoint =
  "https://api-internal.sellix.io/v1/sales/general_contact_form";
function contactFormData() {
  return {
    full_name: document.getElementById("contact_full_name").value,
    work_email: document.getElementById("contact_work_email").value,
    website: document.getElementById("contact_website").value,
    volume: document.getElementById("contact_volume").value,
    business_type: document.getElementById("contact_business_type").value,
    message: document.getElementById("contact_message").value,
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
formSubmit(contactForm, contactFormData, contactEndpoint);

//Section headers
const sectionHeaders = document?.querySelectorAll(
  ".section-header:not([data-no-global-animation])"
);
if (sectionHeaders.length > 0) {
  sectionHeaders.forEach((header) => {
    const tag = header.querySelector(".section-tag");
    const heading = header.querySelector("h2");
    const text = header.querySelector("p");
    const btn = header?.querySelector(".button");
    ScrollTrigger.create({
      trigger: header,
      start: "top 70%",
      end: "top 40%",
      invalidateOnRefresh: true,
      onEnter: () => {
        const tl = gsap
          .timeline()
          .to(tag, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(
            heading,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            "<15%"
          )
          .to(
            text,
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "<15%"
          )
          .to(
            btn,
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "<15%"
          );
      },
    });
  });
}
//Features cards reveal
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
        gsap.to(card, {
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

//Testimonial particles animation
if (window.innerWidth > 991) {
  const circles = document.querySelectorAll(".bg-dots svg circle");
  if (circles) {
    const selectedCircles = [];

    circles.forEach((circle) => {
      const duration = Math.random() * 1 + 1;
      const finalOpacity = 0;
      const delay = Math.random() * 2; // Random delay up to 2s

      circle.style.animation = `fade ${duration}s ${delay}s infinite alternate`;
      circle.style.setProperty("--final-opacity", finalOpacity);
      circle.classList.add("circle");
    });
  }
}

// Function to check if an element has a vertical scrollbar
function hasVerticalScrollbar(element) {
  return element.scrollHeight > element.clientHeight;
}

// Function to apply the appropriate class
function updateScrollbarPadding(element) {
  if (hasVerticalScrollbar(element)) {
    element.classList.add("has-scrollbar");
  } else {
    element.classList.remove("has-scrollbar");
  }
}

const formInnerWraps = document.querySelectorAll(".form_inner-wrap");

// Initial check
formInnerWraps.forEach((el) => updateScrollbarPadding(el));

// Optional: Add a resize event listener to recheck on window resize
window.addEventListener("resize", () =>
  formInnerWraps.forEach((el) => updateScrollbarPadding(el))
);

//Footer date update
const currentYear = new Date().getFullYear();
const dateParagraph = document.querySelector("#current-year");
dateParagraph.textContent = currentYear;
