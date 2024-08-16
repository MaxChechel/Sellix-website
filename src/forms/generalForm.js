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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
formSubmit(contactForm, contactFormData, contactEndpoint);
