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