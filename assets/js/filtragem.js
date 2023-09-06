// Filtro
function ordenarCards(criterio) {
    const cardsContainer = document.querySelector('.cards-cripto');
    const cards = Array.from(cardsContainer.querySelectorAll('.card'));

    function compararCards(a, b) {
        const valorA = parseFloat(a.querySelector('.cotacao span').textContent.replace('R$', '').replace(',', ''));
        const valorB = parseFloat(b.querySelector('.cotacao span').textContent.replace('R$', '').replace(',', ''));

        if (criterio === 'Menor valor') {
            return valorA - valorB;
        } else if (criterio === 'Maior valor') {
            return valorB - valorA;
        } else {
            const nomeA = a.querySelector('.card-nome h2').textContent.toLowerCase();
            const nomeB = b.querySelector('.card-nome h2').textContent.toLowerCase();
            return nomeA.localeCompare(nomeB);
        }
    }

    cards.sort(compararCards);
    cardsContainer.innerHTML = '';

    cards.forEach((card) => {
        cardsContainer.appendChild(card);
    });
}

const selectFiltro = document.querySelector('.barra-filtro');

selectFiltro.addEventListener('change', () => {
    const criterio = selectFiltro.value;
    ordenarCards(criterio);
});

// Barra de pesquisa
function filtrarCards(pesquisa) {
    const cardsContainer = document.querySelector('.cards-cripto');
    const cards = Array.from(cardsContainer.querySelectorAll('.card'));

    cards.forEach((card) => {
        const nomeCripto = card.querySelector('.card-nome h2').textContent.toLowerCase();
        const descricaoCripto = card.querySelector('.card-desc p').textContent.toLowerCase();

        if (nomeCripto.includes(pesquisa) || descricaoCripto.includes(pesquisa)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const inputPesquisa = document.querySelector('.barra-pesquisa input');

inputPesquisa.addEventListener('input', () => {
    const pesquisa = inputPesquisa.value.trim().toLowerCase();
    filtrarCards(pesquisa); 
});
