const toggle = document.getElementById('darkModeToggle');
const explore = document.getElementById('explore');
const nav = document.getElementById('nav');
let box = document.getElementById('icon-box');
const all = document.getElementById('more');
const on = document.getElementById('on');
const off = document.getElementById('off');
const ball = document.getElementsByClassName('ball');
const body = document.querySelector('body');
const foot = document.getElementById('footer');

// Mode selector
toggle.addEventListener('click', function(){
    explore.classList.toggle('dark');
    body.classList.toggle('change');
    on.classList.toggle('active');
    nav.classList.toggle('board');
    toggle.classList.toggle('night');
    totop.classList.toggle('sharp');
    foot.classList.toggle('foot');
    on.style.transition='1s';
    off.style.transition='1s';
    off.classList.toggle('inactive');
    ball.style.cursor='pointer';
    toggle.style.cursor='pointer';
})