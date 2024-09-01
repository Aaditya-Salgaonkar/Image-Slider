let idx = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.contentItem');
    if (index >= slides.length) {
        idx = 1;
    } else if (index < 0) {
        idx = slides.length - 1;
    } else {
        idx = index;
    }
    const offset = -idx * 100;
    document.querySelector('.contentInner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(idx - 1);
}

function nextSlide() {
    showSlide(idx + 1);
}
