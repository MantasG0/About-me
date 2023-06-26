// Get the canvas element
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to match window size
function setCanvasSize() {
    const container = document.querySelector('.main-container');
    const divElements = document.getElementsByClassName('main-container');
    const div = divElements[0];
    const width = div.offsetWidth + getMarginValue(container, 'marginLeft') + getMarginValue(container, 'marginRight');
    const height = div.offsetHeight + getMarginValue(container, 'marginTop') + getMarginValue(container, 'marginBottom');
    
    canvas.width = width;
    canvas.height = height;
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight;
}
function getMarginValue(element, property) {
  const styles = window.getComputedStyle(element);
  return parseFloat(styles[property]);
}

// Create a function to draw the space background
function drawSpaceBackground() {
  // Create a gradient for the background
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0.4, '#000000');
    // Start color (black)
  gradient.addColorStop(1, '#26719C');  // End color (dark blue)

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Create random stars
function generateRandomStars() {
  stars.length = 0; // Clear the stars array
  for (let i = 0; i < 500; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 2;
    stars.push({ x, y, radius });
  }
}

const stars = [];

// Update star positions
function updateStars() {
  stars.forEach(star => {
    star.y += 0.1; // Update y position (stars move downward) star speed
    if (star.y > canvas.height) {
      star.y = 0; // Reset star position to the top
    }
  });
}

// Draw stars on the canvas
function drawStars() {
  ctx.fillStyle = 'white'; // Star color (white)
  stars.forEach(star => {
    // Apply random opacity variation
    const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
    ctx.globalAlpha = opacity;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.globalAlpha = 1;
  });
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  updateStars();
  drawSpaceBackground();
  drawStars();
}

// Handle window resize event
function handleWindowResize() {
    setCanvasSize()
    generateRandomStars();
}

// Handle page load or refresh event
function handlePageLoad() {
  setCanvasSize();
  generateRandomStars();
  animate();
}

// Start the animation
generateRandomStars();
animate();

// Add window resize event listener
window.addEventListener("resize", handleWindowResize);
window.addEventListener('load', handlePageLoad);