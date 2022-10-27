// Typewriter effect
let i = 0;
let txt = 'Hello! My name is Stef!'; /* The text */
let speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("stef").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// Blinking cursor effect
let blink_speed = 1000;
let t = setInterval(function () {
    let ele = document.getElementById('myBlinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);


// Website animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

// To check the scroll position on page load
window.addEventListener("scroll", reveal);
reveal();

// Copy email to clipboard
function myEmail() {
  const email = "sena.stefano@gmail.com";

  // Copy the text inside the text field
  navigator.clipboard.writeText(email);
  
  // Alert
  alert("Copied Stef's email: " + email);
};