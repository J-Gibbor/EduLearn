function updateProfile() {
        document.getElementById('displayName').innerText = document.getElementById('nameInput').value;
        document.getElementById('displayRole').innerText = document.getElementById('roleInput').value;
        document.getElementById('aboutPreview').innerText = document.querySelector('textarea').value;
        alert('Profile updated successfully');
}

function previewImage(event) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('profilePreview').src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
}

const toggle = document.getElementById('darkModeToggle');
const explore = document.getElementById('explore');
const navbar = document.getElementById('profile');
let box = document.getElementById('icon-box');
const all = document.getElementById('more');
const on = document.getElementById('on');
const off = document.getElementById('off');
const ball = document.getElementsByClassName('ball');
const body = document.querySelector('body');
const foot = document.getElementById('footer');
const profile = document.getElementById('profileHeader');

// Mode selector
toggle.addEventListener('click', function(){
    explore.classList.toggle('dark');
    body.classList.toggle('change');
    on.classList.toggle('active');
    navbar.classList.toggle('board');
    toggle.classList.toggle('night');
    navbar.classList.add('change');
    totop.classList.toggle('sharp');
    profile.classList.add('change');
    foot.classList.toggle('foot');
    on.style.transition='1s';
    off.style.transition='1s';
    off.classList.toggle('inactive');
    ball.style.cursor='pointer';
    toggle.style.cursor='pointer';
})