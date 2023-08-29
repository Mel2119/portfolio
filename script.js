document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarMenu = document.querySelector('.navbar-menu');
    const closeButton = document.querySelector('.close-button');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
    const introText = "I'm web devloper!";
const introParagraph = document.getElementById("intro-text");

function typeWriter(text, index) {
  if (index < text.length) {
    introParagraph.textContent += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index), 100);
  }
}




  typeWriter(introText, 0);
  
    
});
document.addEventListener('DOMContentLoaded', function() {
    function fillStars(starCount) {
      const stars = document.querySelectorAll('.rating .star');

      for (let i = 0; i < stars.length; i++) {
        if (i < starCount) {
          stars[i].classList.add('filled');
        } else {
          stars[i].classList.remove('filled');
        }
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var showDetailsButton = document.getElementById('showDetails');
    var detailsContainer = document.getElementById('details');
    var closeDetailsButton = document.getElementById('closeDetails');

    showDetailsButton.addEventListener('click', function(event) {
      event.preventDefault();
      detailsContainer.style.display = 'block';
    });

    closeDetailsButton.addEventListener('click', function() {
      detailsContainer.style.display = 'none';
    });
  });