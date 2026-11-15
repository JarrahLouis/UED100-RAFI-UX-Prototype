// ==========================================
// RAFI NORTH SYDNEY - UX PROTOTYPE
// UED100 - ASSESSMENT 2
//
// PURPOSE:
// Add interactive behaviour to the website.
//
// ENTRY 004:
// Expand and collapse restaurant menu
// categories while preserving accessibility.
//
// ==========================================

// ==========================================
// SECTION 1: FIND MENU BUTTONS
// ==========================================

// Find every category button in the document.
//
// querySelectorAll returns a collection of
// elements matching the specified CSS class.

const categoryButtons = document.querySelectorAll(".category-toggle");

// ==========================================
// SECTION 2: INITIALISE MENU CATEGORIES
// ==========================================

// Configure all category buttons before
// enabling the collapsible menu styling.
//
// This is progressive enhancement: without
// working JavaScript, the menu stays visible.

function initialiseMenu() {
  // Start with the first category expanded
  // and the remaining categories collapsed.

  categoryButtons.forEach((button, index) => {
    // Find the ID of the content associated
    // with this particular button.

    const contentId = button.getAttribute("aria-controls");

    const content = document.getElementById(contentId);

    // If the target content is missing,
    // leave the menu visible rather than
    // hiding content we cannot control.

    if (!content) {
      return;
    }

    // Only the first category starts open.

    const shouldOpen = index === 0;

    button.setAttribute("aria-expanded", String(shouldOpen));

    content.classList.toggle("is-open", shouldOpen);

    // Listen for clicks or keyboard
    // activation on the native button.

    button.addEventListener("click", () => {
      // Read the current expanded state.

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Reverse that state.

      const newState = !isExpanded;

      // Update the accessibility attribute.

      button.setAttribute("aria-expanded", String(newState));

      // Update the CSS class.
      // CSS handles the actual visibility.

      content.classList.toggle("is-open", newState);
    });
  });

  // Activate our CSS collapse rules only
  // when every button has a valid content
  // target and can be operated correctly.

  const allTargetsExist = Array.from(categoryButtons).every((button) => {
    const contentId = button.getAttribute("aria-controls");

    return contentId && document.getElementById(contentId);
  });

  if (categoryButtons.length > 0 && allTargetsExist) {
    document.body.classList.add("js-enabled");
  }
}

// ==========================================
// SECTION 3: START THE MENU
// ==========================================

// Our script is loaded at the end of the HTML
// body, so the menu elements already exist.

initialiseMenu();

// ==========================================
// SECTION 4: MOBILE NAVIGATION - ENTRY 006
//
// PURPOSE:
// Show and hide navigation links on mobile.
//
// This is separate from the restaurant
// category controls created in Entry 004.
//
// ACCESSIBILITY:
// Keep aria-expanded and the button label
// consistent with the visible menu state.
// ==========================================

// Find our mobile navigation elements.

const mobileMenuButton = document.getElementById("mobile-menu-button");

const mainNavigation = document.getElementById("main-navigation");

// Only initialise if both elements exist.
// This prevents errors if a component is
// removed or changed in future versions.

if (mobileMenuButton && mainNavigation) {
  // Reveal the mobile control now that its
  // JavaScript behaviour can be attached.

  mobileMenuButton.hidden = false;

  // Toggle navigation when the user clicks
  // or activates the button using a keyboard.

  mobileMenuButton.addEventListener("click", function () {
    const isOpen = mainNavigation.classList.toggle("nav-open");

    // Update the accessibility state.

    mobileMenuButton.setAttribute("aria-expanded", String(isOpen));

    // Give the button a descriptive
    // accessible name for each state.

    mobileMenuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    // Update the visible icon.

    mobileMenuButton.querySelector("span").textContent = isOpen ? "✕" : "☰";
  });

  // Close the mobile menu after selecting
  // a navigation link.

  mainNavigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNavigation.classList.remove("nav-open");

      mobileMenuButton.setAttribute("aria-expanded", "false");

      mobileMenuButton.setAttribute("aria-label", "Open navigation menu");

      mobileMenuButton.querySelector("span").textContent = "☰";
    });
  });
}

// ==========================================
// SECTION 5: CONTACT FORM - ENTRY 007
//
// PURPOSE:
// Validate the demonstration enquiry form
// and provide feedback without sending data.
//
// SECURITY:
// No network request or database is used.
// User input is never inserted using innerHTML.
// All messages are displayed using textContent.
//
// NOTE:
// Client-side validation is a usability feature.
// A production website would also require
// secure server-side validation.
// ==========================================

// Find the contact form and status message.

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

// Only initialise if the required elements exist.

if (contactForm && formStatus) {
  // Find the four form fields.

  const nameField = document.getElementById("contact-name");

  const emailField = document.getElementById("contact-email");

  const typeField = document.getElementById("enquiry-type");

  const messageField = document.getElementById("contact-message");

  // ======================================
  // FUNCTION: DISPLAY FIELD ERRORS
  //
  // Updates the error message and marks
  // an invalid field for assistive technology.
  // ======================================

  function setFieldError(field, errorId, message) {
    const errorElement = document.getElementById(errorId);

    // Use textContent rather than innerHTML
    // to avoid interpreting text as HTML.

    errorElement.textContent = message;

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  // ======================================
  // FUNCTION: VALIDATE THE FORM
  //
  // Returns true when all inputs are valid.
  // Otherwise shows errors beside fields.
  // ======================================

  function validateContactForm() {
    let formIsValid = true;
    let firstInvalidField = null;

    // Helper function keeps field-error
    // handling consistent.

    function checkField(field, errorId, message) {
      setFieldError(field, errorId, message);

      if (message) {
        formIsValid = false;

        // Remember the first invalid field
        // so keyboard focus can move there.

        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      }
    }

    // Check that the name is not blank.

    const name = nameField.value.trim();

    checkField(
      nameField,
      "name-error",
      name.length < 2 ? "Please enter at least two characters." : "",
    );

    // Use the browser's built-in email
    // validity check, plus a blank check.

    const email = emailField.value.trim();

    checkField(
      emailField,
      "email-error",
      !email || !emailField.validity.valid
        ? "Please enter a valid email address."
        : "",
    );

    // Require a selected enquiry category.

    checkField(
      typeField,
      "type-error",
      !typeField.value ? "Please select an enquiry type." : "",
    );

    // Require a meaningful message.

    const message = messageField.value.trim();

    checkField(
      messageField,
      "message-error",
      message.length < 10 ? "Please enter at least 10 characters." : "",
    );

    // Move focus to the first invalid field.
    // This helps keyboard users locate errors.

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return formIsValid;
  }

  // ======================================
  // EVENT: FORM SUBMISSION
  //
  // Prevent real submission and provide
  // appropriate demonstration feedback.
  // ======================================

  contactForm.addEventListener("submit", function (event) {
    // Stop the browser submitting the form.
    // The prototype has no server endpoint.

    event.preventDefault();

    const isValid = validateContactForm();

    if (isValid) {
      // Never claim an actual enquiry
      // was sent to the restaurant.

      formStatus.textContent =
        "Form validation successful. " +
        "This is a prototype, so no " +
        "enquiry has been sent.";

      formStatus.classList.remove("form-status-error");

      // Remove demonstration inputs
      // so details are not left visible.

      contactForm.reset();

      // Clear previous validation errors after a
      // successful demonstration submission.
      //
      // Resetting input values does not automatically
      // remove custom ARIA attributes or error text.

      [
        [nameField, "name-error"],
        [emailField, "email-error"],
        [typeField, "type-error"],
        [messageField, "message-error"],
      ].forEach(([field, errorId]) => {
        setFieldError(field, errorId, "");
      });
    } else {
      formStatus.textContent =
        "Please correct the highlighted " + "fields before continuing.";

      formStatus.classList.add("form-status-error");
    }
  });

  // Enable submission only after the JavaScript
  // validation handler has been registered.
  //
  // Without JavaScript, the button remains
  // disabled and cannot submit form data.

  const submitButton = contactForm.querySelector('button[type="submit"]');

  if (submitButton) {
    submitButton.disabled = false;
  }
}
