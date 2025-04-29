/*document.getElementById('img').addEventListener('mouseover', transformar);
document.getElementById('img').addEventListener('mouseout', transformar);*/

/*function transformar() {
    const imgCarro = document.getElementById('img');
    imgCarro.onmouseover = function() {
        imgCarro.style.transform = "scale(1.1)";
    }
    imgCarro.onmouseout = function() {
        imgCarro.style.transform = "scale(1)";
    }
    imgCarro.style.transition = "transform 0.2s ease";
}*/


const imgCarro = document.querySelectorAll(".img"); // Seleciona todas as divs

imgCarro.forEach((div, index) => {
    div.style.transition = "transform 0.2s ease";

    div.addEventListener("mouseover", function() {
        div.style.transform = "scale(1.1)";
    });

    div.addEventListener("mouseout", function() {
        div.style.transform = "scale(1)";
    });

    console.log(`Efeito aplicado na div: ${index + 1}`); // Confere se todas as divs estão sendo selecionadas
});


/*const imgCarro = document.querySelectorAll(".img");

imgCarro.forEach(img => {
    img.addEventListener("mouseover", function() {
        imgCarro.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", function() {
        imgCarro.style.transform = "scale(1)";
    });
    imgCarro.style.transition = "transform 0.2s ease";
});*/