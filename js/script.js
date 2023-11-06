
// menu mobile responsivo

const menuResponsivo = document.querySelector(".menu_header")

menuResponsivo.addEventListener('click', (e) => {
    e.preventDefault

    const menuimg = document.querySelector('.menus') 
    const nav = document.querySelector('.navjs')
    nav.classList.toggle('active')

    if (nav.classList.contains('active')) { // se o elemento tiver ativo, a img do menu ira mudar 
        menuimg.setAttribute('src', './assets/close.svg')
    } else {
        menuimg.setAttribute('src', './assets/menu.svg')
    }
})

// newsletter 


const resp = document.getElementById('newsletterText')
const emailString = document.getElementById('newEmail')
const nomeString = document.getElementById('newNome')
const newCadastro = document.querySelector('.cadastro_new')
const frm = document.querySelector('.forms')


newCadastro.addEventListener("click", (e) => {
    e.preventDefault;

    const emailUser = String(emailString.value);
    const nomeUser = String(nomeString.value);

    if(emailUser === "" && nomeUser === "") { // se o campo do newsletter estiver vazio, irá exibir alert avisando para usuario 
        alert("Você precisa preencher o campo! ")
    } else {
        resp.innerText = `Pronto, agora você receberá novidades exclusivas no e-mail: ${emailUser}` 
        frm.innerHTML = ""
    }

})


// footer responsivo 


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

// plugin animacao 


if (window.SimpleAnime) {
    new SimpleAnime();
}