import produtosEcom from '../../produtos.json' assert {type: "json"}

export default function produtosDinamicos() {
    
    const listProdutos = () => {
        const products = document.querySelector(`.sells`)
        produtosEcom.map((item) => {
            products.innerHTML += `
        
        <li class="list_card">
         <div class="cards">
                <div class="fone_card">
                    <img class="img_card" src="${item.img}" alt="${item.nome}">
                </div>
                <p class="title_card">${item.nome}</p>
                <div class="reviews_card">
                    <img src="../assets/star.png" alt="estrela">
                    <span class="review_card">4.8 (112 reviews)</span>
                </div>
                <span class="preco1_card">DE: R$${item.precoAntigo} por:</span><br>
                <span class="preco2_card">R$ ${item.precoAtual} à vista:</span><br>
                <span class="preco3_card">${item.parcelas}x de R$${item.parcelamento} sem juros </span>
            </div>
            <button class="comprar_card">
                <img src="../assets/shop.svg" alt="compra">
                <span>COMPRAR</span>
            </button>
        </li>
        
        `;
        })
    }

    listProdutos();

}


