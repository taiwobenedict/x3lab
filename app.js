// Set the date we're counting down to (example: Dec 31, 2024)
const countdownDate = new Date("Jan 24, 2025 23:59:59").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
  
  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // If the countdown is finished, display some message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".countdown").innerHTML = "Countdown Finished!";
  }
}, 1000);


