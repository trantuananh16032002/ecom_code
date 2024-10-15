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


window.onload = function() {
    const shopHeading = document.getElementById('shopHeading');
    const shopItems = document.getElementById('shopItems');
    const icon = document.getElementById('shopIcon');

    if (shopHeading) {
        shopHeading.addEventListener('click', function() {
            if (shopItems.style.display === 'none' || shopItems.style.display === '') {
                shopItems.style.display = 'block';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-xmark');
                icon.classList.add('rotate');
            } else {
                shopItems.style.display = 'none';
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-plus');
                icon.classList.remove('rotate');
            }
        });
    }
    // Action3
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
    // Action2
    const optionOne = document.getElementById('optionOne')
    const optionTwo = document.getElementById('optionTwo')
    const optionThree = document.getElementById('optionThree')
    const optionFour = document.getElementById('optionFour')
    const unline = document.getElementById('unline')
    optionOne.addEventListener('click', function(){
        unline.style.left = '0';
    })
    optionTwo.addEventListener('click', function(){
        unline.style.left = '25%';
    })
    optionThree.addEventListener('click', function(){
        unline.style.left = '50%';
    })
    optionFour.addEventListener('click', function(){
        unline.style.left = '75%';
    })
    const options = document.querySelectorAll('.cate-options .option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

};









