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
            shopItems.style.display = 'block';
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-xmark');
            icon.classList.add('rotate'); // Thêm lớp xoay
        } else {
            shopItems.style.display = 'none';
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-plus');
            icon.classList.remove('rotate'); // Xóa lớp xoay
        }
    });
});
// Action
const loginOption = document.getElementById('loginOption');
const registerOption = document.getElementById('registerOption');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');


loginOption.addEventListener('click', function() {
  loginForm.style.display = 'block';   
  registerForm.style.display = 'none'; 
});


registerOption.addEventListener('click', function() {
  registerForm.style.display = 'block';   
  loginForm.style.display = 'none';       
});







