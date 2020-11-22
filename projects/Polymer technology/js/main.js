// бургер меню на чистом js (для себя)
let burgerButton = document.querySelector('.header__burger-menu');
let mobileMenu = document.querySelector('.header__menu');
let mobileMenuList = document.querySelector('.header__list');
let linkNavVisiblity = document.querySelector('.header__menu li');
let navSeparator = document.querySelector('.header__nav-separator');

burgerButton.addEventListener('click', function () {
    if (this.classList.contains('burger-is-active')) {
        this.classList.remove('burger-is-active');
        mobileMenu.style.display = 'none';
        navSeparator.style.display = 'none';
    } else {
        this.classList.add('burger-is-active');
        mobileMenu.style.display = 'block';
        mobileMenuList.style.display = 'block';
        navSeparator.style.display = 'block';
    }
});