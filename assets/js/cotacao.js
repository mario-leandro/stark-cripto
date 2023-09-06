function cotacao(qtd_moeda, valor_moeda) {
    return parseFloat(qtd_moeda) * valor_moeda;
}

function atualizarResultado(inputElement, spanElement, valor_moeda) {
    const quantidade = parseFloat(inputElement.value);
    const resultado = cotacao(quantidade, valor_moeda);
    spanElement.textContent = resultado.toFixed(2);
}

const cotacaoElements = document.querySelectorAll('.cotacao');

cotacaoElements.forEach((element) => {
    const inputElement = element.querySelector('input');
    const spanElement = element.querySelector('span');
    const valorMoedaText = element.querySelector('span').textContent;
    const valorMoeda = parseFloat(valorMoedaText.replace('R$', '').replace(',', ''));

    inputElement.addEventListener('input', () => {
        atualizarResultado(inputElement, spanElement, valorMoeda);
    });
});