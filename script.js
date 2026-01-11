const track = document.getElementById('track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function moverCarrossel() {
  index++;
  
  // Se chegar ao fim das 3 imagens, volta para a primeira
  if (index >= slides.length) {
    index = 0;
  }
  
  const width = slides[0].clientWidth;
  track.style.transform = translateX(${-index * width}px);
}

// Define o tempo de troca (3000ms = 3 segundos)
setInterval(moverCarrossel, 3000);