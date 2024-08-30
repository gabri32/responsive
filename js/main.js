let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === i) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function startCarousel() {
  showSlide(index);
  setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
}

document.addEventListener('DOMContentLoaded', startCarousel);

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

$(document).ready(function() {
    $(".elemento").click(function() {
        console.log("entra", num); // Corregido a console.log
        $(this).animate({top: '200px'}, 500);
    });
});
