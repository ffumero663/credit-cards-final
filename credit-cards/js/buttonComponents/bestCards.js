fetch('/credit-cards/html/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

fetch('/credit-cards/html/header-inside-buttons.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('secondary-header').innerHTML = data;
  })

fetch('/credit-cards/html/button-components/component-best-cards/on-this-page.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('on-this-page-panel').innerHTML = data;
  });

  fetch('/credit-cards/html/button-components/component-best-cards/on-this-page.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('on-this-page-panel-2').innerHTML = data;
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


  function toggleText() {
    const content = document.querySelector('.see-more-text-content');
    const button = document.querySelector('.see-more-btn');
  
    if (content.style.height === '60px') {
      content.style.height = 'auto';    // Expand to show full content
      button.innerText = 'See Less';    // Change button text to indicate collapse
    } else {
      content.style.height = '60px';    // Collapse to original height
      button.innerText = 'See More';    // Change button text back to indicate expansion
    }
  }

  function textAppear() {
    const textDiv = document.getElementById('summary-text');
    const button = document.getElementById('summary-btn');

    if(textDiv.style.display === 'none' || textDiv.style.display === ''){
      textDiv.style.display = 'block';
      button.innerHTML = 'Summary <img src="/credit-cards/images/ButtonComponents/minusIcon.png" alt="minus icon">'
    } else{
      textDiv.style.display = "none";
      button.innerHTML = 'Summary <img src="/credit-cards/images/buttonComponents/plusIcon.png" alt="plus icon">';
    }
  }



// Preload images into memory as before
const imageCache = preloadImagesIntoMemory();

// Function to preload images into memory
function preloadImagesIntoMemory() {
  const imageCache = {};
  const allButtons = document.querySelectorAll('.card-button');

  allButtons.forEach(button => {
    const defaultIcon = button.getAttribute('data-default');
    const activeIcon = button.getAttribute('data-active');

    imageCache[defaultIcon] = new Image();
    imageCache[defaultIcon].src = defaultIcon;

    imageCache[activeIcon] = new Image();
    imageCache[activeIcon].src = activeIcon;
  });

  return imageCache;
}

// Function to toggle the dropdown menu visibility
function toggleDropdown(button) {
  const dropdownContent = button.nextElementSibling;

  // Toggle the 'hidden-more' class to show or hide the dropdown
  dropdownContent.classList.toggle('hidden-more');

  // Close other open dropdowns if needed
  document.querySelectorAll('.dropdown-content-more').forEach((dropdown) => {
    if (dropdown !== dropdownContent) {
      dropdown.classList.add('hidden-more');
    }
  });
}

// Function to handle the item click in the dropdown menu
function handleItemClick(cardId, item) {
  // Clear previous content
  clearCardContainer();

  // Hide the dropdown after clicking an item
  const dropdownContent = item.closest('.dropdown-content-more');
  if (dropdownContent) {
    dropdownContent.classList.add('hidden-more');
  }

  // Show the selected card
  showCard(cardId);

  // Update button states to make sure no other button is in active state
  resetAllButtons();
}

// Function to handle the button click for other buttons outside the dropdown
function handleButtonClick(clickedButton, cardId) {
  // Clear previous content
  clearCardContainer();

  // Update button states and change the button images
  updateButtonStates(clickedButton);

  // Show the selected card
  showCard(cardId);
}

// Function to display the selected card information
function showCard(cardId) {
  const cardContainer = document.getElementById('card-container');

  // Get the selected card content by ID
  const selectedCard = document.getElementById(cardId);

  if (selectedCard) {
    // Clone the selected card and append it to the container
    const cardClone = selectedCard.cloneNode(true);
    cardClone.classList.remove('hidden');
    cardContainer.appendChild(cardClone);
  }
}

// Function to clear the card container
function clearCardContainer() {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
}

// Function to reset the state of all buttons
function resetAllButtons() {
  const allButtons = document.querySelectorAll('.card-button');

  allButtons.forEach(button => {
    if (button.classList.contains('active')) {
      const icon = button.querySelector('.main-icon');
      const defaultIcon = button.getAttribute('data-default');
      icon.src = defaultIcon; // Use default icon
      button.classList.remove('active');
    }
  });
}

// Function to update the state of clicked button
function updateButtonStates(clickedButton) {
  resetAllButtons();

  // Set the clicked button to active state
  if (!clickedButton.classList.contains('active')) {
    const clickedIcon = clickedButton.querySelector('.main-icon');
    const activeIcon = clickedButton.getAttribute('data-active');
    clickedIcon.src = activeIcon; // Set to active icon
    clickedButton.classList.add('active');
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion-item-types-credits");

  accordions.forEach(accordions => {
    accordions.addEventListener("click", function() {
      
      const icon = this.querySelector(".accordion-icon-types-credits");
      if(icon.textContent === "+"){
        icon.textContent = "-";
      } else {
        icon.textContent = "+";
      }

      const panel = this.nextElementSibling;
      if(panel.style.display === "block"){
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
  })
})





