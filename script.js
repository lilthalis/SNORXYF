<script>
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".fade-slide");
    let index = 0;

    function trocarSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(trocarSlide, 3500);
});
</script>
