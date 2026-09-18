const toggle = document.getElementById('darkModeToggle');
const body = document.getElementById('general');
let box = document.getElementById('icon-box');
let accordion1 = document.getElementById('accordion-buttonOne');
let accordion2 = document.getElementById('accordion-buttonTwo');
let accordion3 = document.getElementById('accordion-buttonThree');
let img = document.getElementById('border');
const ball = document.getElementsByClassName('ball');
const search = document.getElementById('search');
const nav = document.getElementById('nav');
const all = document.getElementById('more');
const on = document.getElementById('on');
const off = document.getElementById('off');
const foot = document.querySelector('footItem');
const profile = document.getElementById('profileHeader');
// let text1 = document.getElementById('accordion-body1');
// let text2 = document.getElementById('accordion-body2');
// let text3 = document.getElementById('accordion-body3');


// Mode selector
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
    foot.classList.toggle('foot');
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
