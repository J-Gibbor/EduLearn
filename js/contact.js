const toggle = document.getElementById('darkModeToggle');
const nav = document.getElementById('nav');
const all = document.getElementById('more');
const on = document.getElementById('on');
const off = document.getElementById('off');
const ball = document.getElementsByClassName('ball');
const body = document.querySelector('body');
const foot = document.getElementById('footItem');
const submit = document.getElementById('submit');

// Mode selector
toggle.addEventListener('click', function(){
    body.classList.toggle('change');
    on.classList.toggle('active');
    submit.classList.toggle('dark');
    nav.classList.toggle('board');
    nav.classList.toggle('change');
    toggle.classList.toggle('night');
    totop.classList.toggle('sharp');
    foot.classList.toggle('foot');
    on.style.transition='1s';
    off.style.transition='1s';
    off.classList.toggle('inactive');
    ball.style.cursor='pointer';
    toggle.style.cursor='pointer';
})