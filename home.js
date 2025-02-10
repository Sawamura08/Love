const envelope = document.querySelector(".envelope-wrapper");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});

const myGift = document.querySelector(".btn");
myGift.addEventListener("click", () => {
  window.location.href = "flower.html";
});
