/* CARROSSEL SEGURO */
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.fade-slide');
    
    // VERIFICAÇÃO DE SEGURANÇA
    if (slides.length === 0) {
        console.error("Erro: Nenhuma imagem com a classe .fade-slide foi encontrada.");
        return; 
    }

    let current = 0;
    const intervalo = 3500; // Tempo em milissegundos

    setInterval(() => {
        // Remove a classe ativa da imagem atual
        slides[current].classList.remove('active');
        
        // Calcula a próxima imagem (volta para 0 se chegar no fim)
        current = (current + 1) % slides.length;
        
        // Adiciona a classe ativa na próxima imagem
        slides[current].classList.add('active');
    }, intervalo);
});