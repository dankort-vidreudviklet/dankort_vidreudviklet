function generatePoints() {
  return Math.floor(Math.random() * (400 - 50 + 1)) + 50;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gem brugerens points i en variabel, så vi kan bruge den senere
const userPoints = generatePoints();

// Sæt profil‑felterne
document.getElementById("points").textContent = userPoints;
document.getElementById("completed").textContent = randomNumber(5, 50);
document.getElementById("ongoing").textContent = randomNumber(1, 5);

// DYNAMISK SHOPSORTERING //
document.querySelectorAll(".item").forEach((el) => {
  const price = parseInt(el.getAttribute("data-price"), 10);
  if (price > userPoints) {
    el.classList.add("disabled");
  } else {
    el.classList.remove("disabled");
  }
});

