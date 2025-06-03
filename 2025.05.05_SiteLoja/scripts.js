document.addEventListener('DOMContentLoaded', function () {
    // Função para inicializar um slideshow
    function initSlideshow(slideshowId) {
      let slideIndex = 0;
      const slides = document.querySelectorAll(`#${slideshowId} .slideP`);
  
      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
      }
  
      function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      }
  
      showSlide(slideIndex);
      setInterval(nextSlide, 3000); // Muda a cada 3 segundos
    }
  
    // Inicializa cada slideshow individualmente
    initSlideshow('slideshow1');
    initSlideshow('slideshow2');
    initSlideshow('slideshow3');
  });
  
//=============== Script para rolagem ===================

function scrollCards(value) {
    const container = document.getElementById("scroll-container");
    container.scrollLeft += value;
}




