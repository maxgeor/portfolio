const hopper = document.getElementById('hopper');
const amplitude = 50; // Height of the hop in pixels
const speed = 200; // Speed of the animation in pixels per second
const hopDuration = 500; // Duration of a single hop in milliseconds

let direction = 1; // 1: forward, -1: backward
let startTime = null;
let startPositionX = 0;
let startX = 0;
let startY = 0;

function hop(timestamp) {
  if (startTime === null) {
    startTime = timestamp;
    startX = hopper.offsetLeft;
    startY = hopper.offsetTop;
  }

  const elapsedTime = timestamp - startTime;
  const progress = elapsedTime / hopDuration;

  if (progress >= 1) {
    direction = -direction;
    startTime = timestamp;
  }

  const easedProgress = 0.5 * (1 - Math.cos(Math.PI * progress));
  const newX = startX + direction * speed * elapsedTime / 1000;
  const newY = startY - amplitude * easedProgress;

  hopper.style.left = `${newX}px`;
  hopper.style.top = `${newY}px`;

  // Stop the animation when the hopper reaches the end of the page
  if (newX + hopper.offsetWidth < window.innerWidth && newX > 0) {
    requestAnimationFrame(hop);
  } else {
    hopper.style.left = `${direction === 1 ? window.innerWidth - hopper.offsetWidth : 0}px`;
  }
}

requestAnimationFrame(hop);
