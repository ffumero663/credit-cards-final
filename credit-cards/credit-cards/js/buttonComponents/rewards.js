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

fetch('/credit-cards/html/header-inside-buttons.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('secondary-header').innerHTML = data;
  })

fetch('/credit-cards/html/button-components/component-rewards/on-this-page.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('on-this-page-panel').innerHTML = data;
  });

  fetch('/credit-cards/html/button-components/component-rewards/on-this-page.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('on-this-page-panel-2').innerHTML = data;
  });

  function scrollToTop(){
    document.getElementById('top-of-cards').scrollIntoView({ behavior: 'smooth'})
  }

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
