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


//=============== Script para Slide Parceirias ===================

document.addEventListener('DOMContentLoaded', function () {
  function initSlideshow(slideshowId) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(`#${slideshowId} .slide`);

    function showSlide(index) {
      slides.forEach(slide => slide.style.display = "none");
      slides[index].style.display = "flex";
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    showSlide(slideIndex);
    setInterval(nextSlide, 3000);
  }

  initSlideshow('slideshow1');
  initSlideshow('slideshow2');
  initSlideshow('slideshow3');
});

function scrollCards(value) {
  const container = document.getElementById("scroll-container");
  container.scrollLeft += value;
}

//=============== FUNÇÃO DE BUSCA NO STE ===================


document.getElementById('btnBusca').addEventListener('click', function () {
  const termoBusca = document.getElementById('campoBusca').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const nome = produto.getAttribute('data-nome').toLowerCase();
    if (nome.includes(termoBusca)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
});

// Permitir buscar com Enter
document.getElementById('campoBusca').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('btnBusca').click();
  }
});