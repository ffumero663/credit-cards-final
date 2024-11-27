fetch('/credit-cards/html/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('/credit-cards/html/footer.html')
  .then(response => response.text())
  .then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
});

window.onload = function() {
  // Get modal elements
  var modal = document.getElementById("disclosure-modal");
  var link = document.getElementById("disclosure-link");
  var closeBtn = document.getElementById("close-btn");
  var okBtn = document.getElementById("ok-btn");

  // When user clicks the disclosure link
  link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "flex";
  }

  // Close the modal when the user clicks the close button
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when the user clicks the OK button
  okBtn.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal if the user clicks outside of the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}




 let currentStep = 1;
const totalSteps = 8; // Adjust this based on the total number of steps in your quiz




function nextQuestion(event) {
  // Prevent form submission
  if (event) {
    event.preventDefault();
  }

  // Get the current section and the next section
  const currentSection = document.getElementById(`section${currentStep}`);
  const nextSection = document.getElementById(`section${currentStep + 1}`);

  // Find the form within the current section (if there is one)
  const form = currentSection.querySelector('form');

  // If there is a form, validate it
  if (form) {
    // Check if the form is valid
    if (!form.checkValidity()) {
      // If not valid, trigger the native validation messages
      form.reportValidity();
      return;  // Stop here, don't proceed to the next section
    }
  }

  // If the form is valid (or there's no form), move to the next section
  if (nextSection) {
    currentSection.style.display = 'none';
    nextSection.style.display = 'block';

    // Update progress bar
    currentStep++;
    const progressPercentage = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
  }
}



function previousQuestion() {
  if (currentStep > 1) { // Prevent going back beyond the first step
    const currentSection = document.getElementById(`section${currentStep}`);
    const previousSection = document.getElementById(`section${currentStep - 1}`);

    // Hide the current section and show the previous one
    currentSection.style.display = 'none';
    previousSection.style.display = 'block';

    // Decrease the progress bar width by the appropriate percentage
    currentStep--;
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progressPercentage = (currentStep / totalSteps) * 100;
  document.getElementById('progressBar').style.width = progressPercentage + '%';
}



document.addEventListener('DOMContentLoaded', () => {
  const termsModalTwo = document.getElementById('terms-modal-two');
  const agreeButton = document.getElementById('disclosure-btn'); // Your "Agree and Get Matches" button
  const closeModalTwo = document.getElementById('close-terms-modal-two');
  const submitButtonTwo = document.getElementById('submit-btn-two');
  const agreeCheckboxTwo = document.getElementById('agree-checkbox-two');

  // Open the modal when the button is clicked
  agreeButton.onclick = function(event) {
    event.preventDefault();
    termsModalTwo.style.display = 'block';
  };

  // Close the modal when the "X" is clicked
  closeModalTwo.onclick = function() {
    termsModalTwo.style.display = 'none';
  };

  // Close the modal when clicking outside of the modal
  window.onclick = function(event) {
    if (event.target == termsModalTwo) {
      termsModalTwo.style.display = 'none';
    }
  };

  // Enable the submit button when checkbox is checked
  agreeCheckboxTwo.onchange = function () {
    if (agreeCheckboxTwo.checked) {
      submitButtonTwo.disabled = false;
      submitButtonTwo.classList.add('active'); // Change style to make it look active
    } else {
      submitButtonTwo.disabled = true;
      submitButtonTwo.classList.remove('active');
    }
  };
  
});


function toggleAccordion(element) {
  console.log("Accordion toggled"); // Add this to check
  const content = element.nextElementSibling;
  const icon = element.querySelector('.accordion-icon');
  
  // Toggle content visibility
  if (content.style.display === "flex") {
    content.style.display = "none";
    icon.textContent = "+";
  } else {
    content.style.display = "flex";
    icon.textContent = "-";
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('#disclosure-btn'); // Submit button
  const emailInput = document.querySelector('#email-address'); // Email input field

  submitButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate the email input field
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    const email = emailInput.value.trim(); // Get the email address
    console.log("Sending email:", email); // Debug log for email

    const thankYouModal = document.getElementById("thank-you-modal");

    try {
      // Send email to backend
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send email to backend
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Email sent successfully:", result); // Debug log
        thankYouModal.style.display = "flex"; // Show the Thank You modal
      } else {
        const errorResult = await response.json();
        console.error("Backend error:", errorResult); // Debug log
        alert(`Failed to send email: ${errorResult.message}`);
      }
    } catch (error) {
      console.error("Error sending email:", error); // Debug log
      alert("An error occurred while sending the email.");
    }
  });

  // Function to close the Thank You modal
  const closeModalButton = document.querySelector('.close-btn');
  closeModalButton.addEventListener('click', () => {
    const thankYouModal = document.getElementById("thank-you-modal");
    thankYouModal.style.display = "none";
  });
});
