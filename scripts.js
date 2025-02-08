// Load charities and initialize the animated background once the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    loadCharities();
    initBackground();
  });
  
  // Charity data array
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
  
  // Initialize animated particle background
  function initBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");
  
    // Set canvas dimensions to match window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let particles = [];
    const particleCount = 100;
  
    // Particle constructor
    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
      // Translucent primary color
      this.color = "rgba(76, 175, 80, 0.7)";
    }
  
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Update and draw each particle
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
  
        // Wrap particles around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
  
        // Draw particle as a circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
  
      // Draw lines between particles that are near one another
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "rgba(76, 175, 80, 0.1)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
  
      requestAnimationFrame(animate);
    }
    animate();
  
    // Adjust canvas size on window resize
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
  