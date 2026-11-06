/* ===== script.js ===== */

/* LIGHT MODE / DARK MODE (used by the button in the navbar) */
/* "let" is used because the value of mode will change */
let mode = "dark";

function toggleMode() {
    const page = document.getElementById("page");
    const button = document.getElementById("modeButton");

    if (mode == "dark") {
        // change to LIGHT mode
        page.style.backgroundColor = "#e9edf2";
        page.style.color = "#1b2430";
        button.innerHTML = "Dark Mode";
        mode = "light";
    } else {
        // change back to DARK mode
        page.style.backgroundColor = "#12161c";
        page.style.color = "#e6ebf0";
        button.innerHTML = "Light Mode";
        mode = "dark";
    }
}

/* HIRE ME BUTTON (notification) */
function sayHello() {
    // EDIT: change the message
    window.alert("Hello! Thank you for visiting my portfolio. Please see my contact details at the bottom of the page.");
}

/* SHOW MY MOTTO BUTTON (changes the text of the box with id="motto") */
function showMotto() {
    // EDIT: write your own motto
    const text = "Hard work beats talent when talent does not work hard. - Your Name";
    document.getElementById("motto").innerHTML = text;
}
