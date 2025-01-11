// Borde rojo
const img = document.getElementById("toggle-border-img");
img.addEventListener("click", () => {
  img.classList.toggle("red-border");
});

// Stickers
const checkStickersButton = document.getElementById("check-stickers");
const stickerResult = document.getElementById("sticker-result");

checkStickersButton.addEventListener("click", () => {
  const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  const totalStickers = sticker1 + sticker2 + sticker3;

  if (totalStickers <= 10) {
    stickerResult.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    stickerResult.textContent = "Llevas demasiados stickers";
  }
});

// Verificador de password
const checkPasswordButton = document.getElementById("check-password");
const passwordResult = document.getElementById("password-result");

checkPasswordButton.addEventListener("click", () => {
  const digit1 = document.getElementById("digit1").value;
  const digit2 = document.getElementById("digit2").value;
  const digit3 = document.getElementById("digit3").value;

  const password = digit1 + digit2 + digit3;

  if (password === "911") {
    passwordResult.textContent = "Password 1 correcto";
  } else if (password === "714") {
    passwordResult.textContent = "Password 2 es correcto";
  } else {
    passwordResult.textContent = "Password incorrecto";
  }
});
