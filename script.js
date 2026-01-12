<script>
const slides = document.querySelectorAll('.fade-slide');
let currentSlide = 0;

function trocarSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(trocarSlide, 3500);
</script>
