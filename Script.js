let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    user.classList.remove('active');
    memu.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    user.classList.remove('active');
    memu.classList.remove('active');
}

let user = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=>{
    user.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    memu.classList.remove('active');
}

let memu= document.querySelector('.navbar');
document.querySelector('#memu-btn').onclick = ()=>{
    memu.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    user.classList.remove('active');
}

window.onscroll = ()=>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    user.classList.remove('active');
    memu.classList.remove('active');
}

var swiper = new Swiper('.product-slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        768: {
            slidesPerView: 2, 
        },
        1020: {
            slidesPerView: 3, 
        },
    },
});


var swiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        768: {
            slidesPerView: 2, 
        },
        1020: {
            slidesPerView: 3, 
        },
    },
});
