const btn = document.getElementById("btn-sorpresa");
const dato = document.getElementById("dato");

const datosCuriosos = [
  "El coche de F1 puede acelerar de 0 a 100 km/h en menos de 2.5 segundos.",
  "El motor de un F1 puede llegar a más de 15.000 revoluciones por minuto.",
  "En una carrera, los pilotos pueden perder hasta 3 kg de peso por la fuerza G y el calor.",
  "El costo de un coche de F1 supera fácilmente los 10 millones de dólares."
];

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * datosCuriosos.length);
  dato.textContent = datosCuriosos[random];
});
