// Flickity customers
var flkty = new Flickity('.carousel', {
    "pageDots": false,
    "prevNextButtons": false
});
document.querySelector('.vector-left').addEventListener('click', function() {
    flkty.previous();
});
document.querySelector('.vector-right').addEventListener('click', function() {
    flkty.next();
});


document.addEventListener('DOMContentLoaded', function() {
    const shopHeading = document.getElementById('shopHeading');
    const shopItems = document.getElementById('shopItems');
    const icon = document.getElementById('shopIcon');

    shopHeading.addEventListener('click', function() {
        if (shopItems.style.display === 'none' || shopItems.style.display === '') {
            // Hiển thị danh sách và thay đổi icon
            shopItems.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-xmark');
            icon.classList.add('rotate');
        } else {
            // Ẩn danh sách và thay đổi lại icon
            shopItems.style.display = 'none';
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-plus');
            icon.classList.remove('rotate');
        }
    });
});

// Action
document.addEventListener("DOMContentLoaded", function() {
    const loginOption = document.getElementById('loginOption');
    const registerOption = document.getElementById('registerOption');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const underline = document.getElementById('underline');

    loginOption.addEventListener('click', function() {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginOption.classList.add('active');
        registerOption.classList.remove('active');
        underline.style.left = '0';
    });

    registerOption.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        registerOption.classList.add('active');
        loginOption.classList.remove('active');
        underline.style.left = '50%';
    });
});








