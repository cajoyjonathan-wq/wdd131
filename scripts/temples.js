const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modification:  ${document.lastModified}.`

const hamburger = document.querySelector('.hamburger-menu');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('open')

    if (navLink.classList.contains('open')) {
        hamburger.textContent = 'X'
    } else {
        hamburger.textContent = '☰'
    }
});