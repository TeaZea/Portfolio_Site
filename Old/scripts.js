// Typewriter Name
function typeWriterName() {
    let i = 0;
    let name = "HELLO! I'M STEF.";
    let speed = 100;
    
    if (i < name.length) {
        document.getElementById("firstname").innerHTML += name.charAt(i);
        i++;
        setTimeout(typeWriterName, speed);
    }
}

// Blinking Typewriter Crusor
let blink_speed = 1000;
let t = setInterval(function () {
    let ele = document.getElementById('myBlinkingDiv');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
