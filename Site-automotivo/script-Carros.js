const imagens = document.querySelectorAll('.zoomable'); //pega todas com a classe zoomable

imagens.forEach(img => {
    img.style.transition = "transform 0.2s ease"; //deixa a transição de tamanhos suave

    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.15)";
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
