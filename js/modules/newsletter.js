//newsletter 

export default function newSletterResponsive() {
    const resp = document.getElementById('newsletterText')
    const emailString = document.getElementById('newEmail')
    const nomeString = document.getElementById('newNome')
    const newCadastro = document.querySelector('.cadastro_new')
    const frm = document.querySelector('.forms')


    newCadastro.addEventListener("click", (e) => {
        e.preventDefault;

        const emailUser = String(emailString.value);
        const nomeUser = String(nomeString.value);

        if (emailUser === "" && nomeUser === "") { // se o campo do newsletter estiver vazio, irá exibir alert avisando para usuario 
            alert("Você precisa preencher o campo! ")
        } else {
            resp.innerText = `Pronto, agora você receberá novidades exclusivas no e-mail: ${emailUser}`
            frm.innerHTML = ""
        }

    })

}

