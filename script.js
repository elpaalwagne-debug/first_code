// Set her name dynamically
const girlName = "Yididiya";
document.getElementById("name").textContent = girlName;

// Music (starts on first interaction – browser rule)
const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// No button escape 😏
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button
function forgiven() {
  document.getElementById("response").textContent =
    "Yay! Thank you 💕 I promise to do better 🌸";

  // Hearts animation
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}
