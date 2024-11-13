fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('/credit-cards/html/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })

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

function showReviews(section, event) {
  // Remove the 'active' class from all sections
  const sections = document.querySelectorAll('.review-section');
  sections.forEach(function (section) {
    section.classList.remove('active');
  });

  // Remove the 'active' class from all tabs
  const tabs = document.querySelectorAll('.button-reviews');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Add the 'active' class to the selected section
  document.getElementById(section).classList.add('active');

  // Add the 'active' class to the clicked tab
  event.target.classList.add('active');
}

// Automatically show the first section on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cashBack').classList.add('active');
});

function showReviews(section, event) {
  // Remove the 'active' class from all sections
  const sections = document.querySelectorAll('.review-section');
  sections.forEach(function (section) {
    section.classList.remove('active');
  });

  // Remove the 'active' class from all tabs
  const tabs = document.querySelectorAll('.button-reviews');
  tabs.forEach(function (tab) {
    tab.classList.remove('active');
  });

  // Add the 'active' class to the selected section
  document.getElementById(section).classList.add('active');

  // Add the 'active' class to the clicked tab
  event.target.classList.add('active');

  // Dynamically update the button text based on the section
  const button = document.getElementById('dynamic-button');
  if (section === 'cashBack') {
    button.textContent = 'See all cash back card reviews';
  } else if (section === 'balanceTransfer') {
    button.textContent = 'See all balance transfer card reviews';
  } else if (section === 'apr') {
    button.textContent = 'See all 0% APR card reviews';
  } else if (section === 'rewards') {
    button.textContent = 'See all rewards card reviews';
  } else if (section === 'travel') {
    button.textContent = 'See all travel card reviews';
  }
}

// Automatically show the first section on page load
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cashBack').classList.add('active');
});




