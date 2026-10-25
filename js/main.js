const toggle = document.getElementById('darkModeToggle');
const body = document.getElementById('general');
let box = document.getElementById('icon-box');
let accordion1 = document.getElementById('accordion-buttonOne');
let accordion2 = document.getElementById('accordion-buttonTwo');
let accordion3 = document.getElementById('accordion-buttonThree');
let img = document.getElementById('border');
const ball = document.getElementsByClassName('ball');
const footer = document.querySelector('footItem');

toggle.addEventListener('click', function(){
    body.classList.toggle('change');
    on.classList.toggle('active');
    on.style.transition='1s';
    off.style.transition='1s';
    off.classList.toggle('inactive');
    toggle.classList.toggle('night');
    this.classList.toggle('sharp');
    totop.classList.toggle('sharp');
    search.classList.toggle('dark');
    nav.classList.toggle('board');
    nav.classList.toggle('change');
    profile.classList.toggle('change');
    all.classList.toggle('darkened');
    footer.classList.add('foot');
    // accordion1.classList.toggle('bg-dark');
    // accordion1.classList.toggle('text-light');
    // accordion2.classList.toggle('bg-dark');
    // accordion2.classList.toggle('text-light');
    // accordion3.classList.toggle('bg-dark');
    // accordion3.classList.toggle('text-light');
    img.classList.toggle('border');
    ball.style.cursor='pointer';
    toggle.style.cursor='pointer';

    // text1.classList.toggle('bg-dark');
    // text1.classList.toggle('text-light');
    // text2.classList.toggle('bg-dark');
    // text2.classList.toggle('text-light');
    // text3.classList.toggle('bg-dark');
    // text3.classList.toggle('text-light');

})