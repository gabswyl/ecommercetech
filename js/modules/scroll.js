export default function scrollAnimacao() {
    const animar = document.querySelectorAll('.animar');
    const scrollResponsivo = window.innerHeight * 0.6

    function scrollAnimar() {
        animar.forEach((item) => {
            const animacao = item.getBoundingClientRect().top - scrollResponsivo;

            if (animacao < 0) {
                item.classList.add('ativo')
            }
        })
    }

    window.addEventListener("scroll", scrollAnimar)
}

