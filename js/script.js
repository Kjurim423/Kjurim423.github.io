let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += step;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function toggleMenu() {
    var navigation = document.querySelector('.menu-navigation');
    if (navigation.style.display === 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
}