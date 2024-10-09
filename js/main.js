let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(i) {
  // Movemos el contenedor de las imágenes (slider-container) para que se desplace.
  document.querySelector('.slider-container').style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides; // Incrementa el índice y lo resetea cuando llega al final.
  showSlide(index); // Muestra la nueva slide.
}

function startCarousel() {
  showSlide(index); // Inicializa mostrando la primera slide.
  setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos.
}

document.addEventListener('DOMContentLoaded', startCarousel);


const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});



// Selecciona todos los elementos que quieres animar

function loadForm() {
  fetch('formulario.html') // Cargar el archivo HTML del formulario
      .then(response => response.text())
      .then(html => {
          document.getElementById('form-container').innerHTML = html;
          document.getElementById('form-container').style.display = 'block';
      });
}
function loadForm2() {
  fetch('formulario2.html') // Cargar el archivo HTML del formulario
      .then(response => response.text())
      .then(html => {
          document.getElementById('form-container').innerHTML = html;
          document.getElementById('form-container').style.display = 'block';
      });
}
function closeForm() {
  document.getElementById("form-container").style.display = "none";
}
function enviarAWhatsApp() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;

  // Crear el mensaje para enviar a WhatsApp
  var mensaje = "Hola! Mi nombre es " + nombre + ", mi teléfono es " + telefono + " y mi correo es " + email + ". Me gustaría obtener más información.";

  // Crear el enlace de WhatsApp con el mensaje
  var url = "https://wa.me/573172260184?text=" + encodeURIComponent(mensaje);

  // Redirigir a la URL de WhatsApp
  window.open(url, '_blank');
}