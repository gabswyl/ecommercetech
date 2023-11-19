// carrinho de compras dropdown 

export default function listShopDrop() {
    const listaCompra = document.querySelector('.listaCompras')
    const fecharCompra = document.querySelector('.bar_button')

    listaCompra.addEventListener('click', (e) => {
        e.preventDefault();

        const barCompra = document.querySelector('.bar_card')
        barCompra.classList.toggle('ativo')

    })

    fecharCompra.addEventListener('click', (e) => {
        e.preventDefault();

        const barCompra = document.querySelector('.bar_card')
        barCompra.classList.toggle('ativo')
    })

}


