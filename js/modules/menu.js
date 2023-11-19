// menu mobile responsivo

export default function menuResponsive() {
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

}

