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


function scrollCards(value) {
    const container = document.getElementById("scroll-container");
    container.scrollLeft += value;
}

//================== MODAL PARA CARDS ANDANDO PARA OS LADOS ==================//

function scrollCards(direction) {
    const container = document.getElementById('cardsContainer');
    const scrollAmount = 300; // ajuste a distância do scroll aqui
  
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

//================== Função setas ==================//
  function scrollCards(direction) {
    const container = document.getElementById('cardsContainer');
    const scrollAmount = 300;
  
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  