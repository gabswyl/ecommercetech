// carrinho de compras dropdown 

export default function listShopDrop() {
    const listaCompra = document.querySelector('.listaCompras')
    const fecharCompra = document.querySelector('.bar_button')
    const continuarComprando = document.querySelector('.bar_continuar')

    listaCompra.addEventListener('click', (e) => {
        e.preventDefault();

        const barCompra = document.querySelector('.bar_card')
        barCompra.classList.toggle('ativo')
        const overlayBar = document.querySelector('.overlay')
        overlayBar.classList.toggle('ativo')

    })

    fecharCompra.addEventListener('click', (e) => {
        e.preventDefault();

        const barCompra = document.querySelector('.bar_card')
        barCompra.classList.toggle('ativo')
        const overlayBar = document.querySelector('.overlay')
        overlayBar.classList.toggle('ativo')
    })

    
    continuarComprando.addEventListener('click', (e) => {
        e.preventDefault();

        const barCompra = document.querySelector('.bar_card')
        barCompra.classList.toggle('ativo')
        const overlayBar = document.querySelector('.overlay')
        overlayBar.classList.toggle('ativo')
    })

}


