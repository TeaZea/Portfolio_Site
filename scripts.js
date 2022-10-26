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


function myEmail() {
  const email = "sena.stefano@gmail.com";

  // Copy the text inside the text field
  navigator.clipboard.writeText(email);
  
  // Alert
  alert("Copied Stef's email: " + email);
};