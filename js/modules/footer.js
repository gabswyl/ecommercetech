// footer responsivo 

export default function footerResponsive() {

    const footerFaq = document.querySelectorAll('.footer_responsivo');

    function footerFuncao(event) {
        const lista = event.currentTarget;
        const arial = lista.getAttribute('aria-controls')
        const respostaLista = document.getElementById(arial)

        respostaLista.classList.toggle('ativa')

    }

    function footerEvento(lista) {
        lista.addEventListener('click', footerFuncao);
    }

    footerFaq.forEach(footerEvento);

}