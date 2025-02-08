// Load charities and initialize the animated background once the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  loadCharities();
  initBackground();
});

// Charity data array (for demo purposes)
const charities = [
{
  name: "Save the Oceans",
  description: "Help save our oceans by reducing plastic pollution.",
  image: "pic2.jpg",
  donationLink: "donate.html"
},
{
  name: "Educate Kids",
  description: "Donate to provide education to underprivileged children.",
  image: "pic1.jpg",
  donationLink: "donate.html"
},
{
  name: "Fight Hunger",
  description: "Support food programs to fight global hunger.",
  image: "pic1.jpg",
  donationLink: "donate.html"
}
];

// Function to dynamically load charity cards
function loadCharities() {
const charityList = document.getElementById("charity-list");
charityList.innerHTML = ""; // Clear any existing content

charities.forEach((charity) => {
  const card = document.createElement("div");
  card.className = "charity-card";
  card.innerHTML = `
    <img class="charity-image" src="${charity.image}" alt="${charity.name}" />
    <div class="charity-card-content">
      <h3>${charity.name}</h3>
      <p>${charity.description}</p>
      <a href="${charity.donationLink}" class="donation-button">Donate with XRP</a>
    </div>
  `;
  charityList.appendChild(card);
});
}

// Initialize the "Changing Tides" (wave) background animation
function initBackground() {
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions to match window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function animateTides() {
  time += 0.5;
  // Create a vertical gradient that evokes water tones.
  let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#0f4c75");   // Dark blue
  gradient.addColorStop(0.5, "#3282b8");   // Medium blue
  gradient.addColorStop(1, "#bbe1fa");     // Light blue
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw sine-wave curves to simulate gently shifting tides.
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    let waveAmplitude = 20 + i * 10;
    let yOffset = canvas.height / 2 + i * 30;
    ctx.moveTo(0, yOffset);
    for (let x = 0; x <= canvas.width; x += 10) {
      let y = waveAmplitude * Math.sin((x + time + i * 50) * 0.02) + yOffset;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();
  }

  requestAnimationFrame(animateTides);
}

animateTides();

// Adjust canvas size on window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
}

// (Optional) If you have additional code for authentication, you can add it here.
function initAuthButton() {
const authButton = document.getElementById("auth-button");
const user = localStorage.getItem("loggedInUser");

if (user) {
  authButton.textContent = "Logout";
  authButton.onclick = function () {
    localStorage.removeItem("loggedInUser");
    alert("You have logged out.");
    window.location.reload();
  };
} else {
  authButton.textContent = "Login";
  authButton.onclick = function () {
    window.location.href = "auth.html";
  };
}
}
