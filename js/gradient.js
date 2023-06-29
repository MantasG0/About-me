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
  gradient.addColorStop(0.4, 'Black');
    // Start color (black)
  gradient.addColorStop(1, '#26719C');  // End color (dark blue)

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Handle window resize event
function handleWindowResize() {
    setCanvasSize()
    drawSpaceBackground();
}

// Handle page load or refresh event
function handlePageLoad() {
    setCanvasSize();
    drawSpaceBackground();
}

setCanvasSize()
drawSpaceBackground();

// Add window resize event listener
window.addEventListener("resize", handleWindowResize);
window.addEventListener('load', handlePageLoad);