
$(function(){
    $('.slider__inner').slick({
        dots: true,
        arrows:false
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
    header.classList.add('header__fixed');
    } else {
    header.classList.remove('header__fixed');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var mixer = mixitup('.popular__categories-content');
});
