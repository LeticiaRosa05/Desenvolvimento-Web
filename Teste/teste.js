const container = document.querySelector('.scroll_list');
const itens = container.querySelectorAll('.item');

container.addEventListener('scroll', () => {
    const center = container.scrollTop + container.clientHeight / 2;
    let minDistance = Infinity;
    let mainIndex = -1;

    // Encontrar o item principal (em evidência)
    itens.forEach((item, idx) => {
        const boxCenter = item.offsetTop + item.clientHeight / 2;
        const distance = Math.abs(center - boxCenter);

        if (distance < minDistance) {
            minDistance = distance;
            mainIndex = idx;
        }
    });

    itens.forEach((item, idx) => {
        if (idx === mainIndex) {
            // Item em evidência
            item.style.opacity = 1;
            item.style.transform = 'scale(1)';
        } else if (idx === mainIndex - 1 || idx === mainIndex + 1) {
            // Imediatamente acima ou abaixo
            item.style.opacity = 0.5;
            item.style.transform = 'scale(0.8)';
        } else if (idx === mainIndex - 2 || idx === mainIndex + 2) {
            // Terciariamente distante
            item.style.opacity = 0.1;
            item.style.transform = 'scale(0.5)';
        } else {
            // Demais itens
            item.style.opacity = 0;
            item.style.transform = 'scale(0.05)';
        }
    });
});


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.day-card');

let activeCard = null;
let activeTimeout = null;

function applySnapActiveByIndex(index) {
  const targetCard = Array.from(cards).find(
    card => card.dataset.index === index
  );
  
  if (targetCard && targetCard !== activeCard) {
    // Remove da anterior
    if (activeCard) {
      activeCard.querySelector('.meta')?.classList.remove('snap-active');
      clearTimeout(activeTimeout);
    }

    const meta = targetCard.querySelector('.meta');
    meta.classList.add('snap-active');

    activeTimeout = setTimeout(() => {
      meta.classList.remove('snap-active');
      activeCard = null;
    }, 60000); // Temporizador de 60s

    activeCard = targetCard;
  }
}

// Captura de clique no scroll-marker
carousel.addEventListener('click', (e) => {
  const marker = e.target.closest('li');
  if (!marker) return;

  const index = Array.from(carousel.children).indexOf(marker) + 1;
  applySnapActiveByIndex(index.toString());
});


/* Efeitos da div eventos */
const eventosImg = document.querySelectorAll('.evtsImg');
const body = document.body;
let isZoomed = null;

function removerZoom() {
    if (!isZoomed) return;

    const overlay = document.getElementById('img-overlay');

    isZoomed.classList.remove('zoom-ativo');
    isZoomed.style.transform = 'translate(0, 0) scale(1)';
    isZoomed.style.width = '';
    isZoomed.style.maxHeight = '';

    if (overlay) {
        overlay.classList.remove('overlay-ativo');
        overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    }

    isZoomed = null;
    body.style.overflow = ''; // Permite rolagem na página novamente pois a img não está mais com zoom
}

eventosImg.forEach(evtImg => {
    evtImg.style.transition = "transform 0.3s ease-in-out";

    evtImg.addEventListener('mouseover', () => {
        if (isZoomed !== evtImg) {
            evtImg.style.transform = "scale(1.13)";
        }
    });
    evtImg.addEventListener('mouseout', () => {
        if (isZoomed !== evtImg) {
            evtImg.style.transform = "scale(1)";
        }
    });

    evtImg.addEventListener('click', () => {
        if (isZoomed) return;
        isZoomed = evtImg;
        
        const rect = evtImg.getBoundingClientRect(); // Pega as dimensões e posição da imagem

        const viewportCenterX = window.innerWidth / 2; // Calcula o centro da tela (viewport)
        const viewportCenterY = window.innerHeight / 2;

        const imagemCenterX = rect.left + rect.width / 2; // Calcula o centro da imagem
        const imagemCenterY = rect.top + rect.height / 2;

        const translateX = viewportCenterX - imagemCenterX; // Calcula a distância que a imagem precisa se mover nos eixos X e Y
        const translateY = viewportCenterY - imagemCenterY;

        evtImg.style.maxHeight = '20vh'; /* ocasiona erro quando precisa ser usado, zoom extra ao clicar no overlay */
        evtImg.style.width = 'auto';
        evtImg.style.height = 'auto';
        
        // Aplica a classe para subir o z-index e a transformação para mover a imagem
        evtImg.classList.add('zoom-ativo');
        evtImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(4)`;
        
        body.style.overflow = 'hidden'; // Impede que a página role enquanto a imagem está com zoom


        const overlay = document.createElement('div'); // Cria e exibe o overlay
        overlay.id = 'img-overlay';
        body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('overlay-ativo'), 10);

        overlay.addEventListener('click', removerZoom); // Remoção do zoom com clique no overlay -> ativo
        /*evtImg.addEventListener('mouseleave', removerZoom);*/ // Remoção do zoom com mouseleave -> inativo
    });
});
