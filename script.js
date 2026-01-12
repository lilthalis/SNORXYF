<script>
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".fade-slide");
    let index = 0;
    const tempo = 3500; // 3.5 segundos

    function trocarSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(trocarSlide, tempo);
});
</script>
