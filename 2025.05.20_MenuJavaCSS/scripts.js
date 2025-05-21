//=============== Slides ===================

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Muda a imagem a cada 3 segundos
}

//=============== Script para rolagem ===================

// function scrollCards(value) {
//     document.getElementById('scroll-container').scrollBy({
//         left: value,
//         behavior: 'smooth'
//     });
// }

function scrollCards(value) {
    const container = document.getElementById("scroll-container");
    container.scrollLeft += value;
}


//=============== SLIDE DE PROMOÇÕES===================

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slideP');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Iniciar
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Muda a cada 3 segundos
});



