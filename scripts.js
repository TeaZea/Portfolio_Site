// Typewriter effect
var i = 0;
var txt = 'Hello! My name is Stef!'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function myEmail() {
  const email = "sena.stefano@gmail.com";

  // Copy the text inside the text field
  navigator.clipboard.writeText(email);
  
  // Alert
  alert("Copied Stef's email: " + email);
};