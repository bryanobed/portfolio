// Obtener el icono de la hamburguesa y el menú
const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.querySelector(".navbar");

// Añadir un evento de clic al icono de la hamburguesa
hamburgerIcon.addEventListener("click", () => {
  // Alternar la clase 'active' en el menú de navegación
  navbar.classList.toggle("active");
});
