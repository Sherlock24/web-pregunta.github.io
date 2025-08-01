const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

yesBtn.addEventListener("click", function () {
  alert(
    "No digas nada mas,solo si tu respuesta es 'SI' dimelo al whatsapp y una sorpresa tendrás"
  );
});

noBtn.addEventListener("mouseover", function () {
  const yesRect = yesBtn.getBoundingClientRect(); // Obtiene las dimensiones y posición del botón "Sí"
  const noRect = noBtn.getBoundingClientRect(); // Obtiene las dimensiones y posición actual del botón "No"

  let newRandomX, newRandomY;
  let collision;

  do {
    // Genera coordenadas aleatorias dentro del 90% del viewport para evitar que se salga mucho de la pantalla
    newRandomX = Math.random() * (window.innerWidth - noRect.width);
    newRandomY = Math.random() * (window.innerHeight - noRect.height);

    // Calcula los límites del botón "No" en su nueva posición
    const newNoLeft = newRandomX;
    const newNoRight = newRandomX + noRect.width;
    const newNoTop = newRandomY;
    const newNoBottom = newRandomY + noRect.height;

    // Comprueba si hay colisión con el botón "Sí"
    collision = !(
      newNoRight < yesRect.left ||
      newNoLeft > yesRect.right ||
      newNoBottom < yesRect.top ||
      newNoTop > yesRect.bottom
    );
  } while (collision); // Repite mientras haya colisión

  // Aplica las nuevas posiciones usando 'px' para un control más preciso
  noBtn.style.setProperty("left", newRandomX + "px");
  noBtn.style.setProperty("top", newRandomY + "px");
  // Elimina la propiedad transform si la tenías para evitar conflictos de posicionamiento
  noBtn.style.removeProperty("transform");
});
