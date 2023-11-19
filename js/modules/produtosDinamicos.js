export default function produtosDinamicos() {
    const produtosEcom = [
        {
            id: 0,
            nome: "Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB",
            img: '..//assets/fone.png',
            precoAntigo: 527.99,
            precoAtual: 227.99,
            parcelas: 12,
            parcelamento: 18.92, // 12x
            quantidade: 0,

        },

        {
            id: 1,
            nome: "Mouse Pad Gamer Iluminado led Rgb Grande 80 cm por 30 com Mousepad gamer Led com em volta superficie speed para jogos",
            img: '..//assets/mousepad.png',
            precoAntigo: 47.05,
            precoAtual: 29.99,
            parcelas: 1,
            parcelamento: 32.28, // 1x
            quantidade: 0,

        },

        {
            id: 2,
            nome: "SSD 480 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 450MB/s - SA400S37/480G",
            img: '..//assets/ssd.png',
            precoAntigo: 199.99,
            precoAtual: 169.99,
            parcelas: 7,
            parcelamento: 26.98, // 7x
            quantidade: 0,

        },

        {
            id: 3,
            nome: "SSD 240 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 350MB/s - SA400S37/240G",
            img: '..//assets/ssd.png',
            precoAntigo: 168.99,
            precoAtual: 122.31,
            parcelas: 5,
            parcelamento: 27.18, // 5x
            quantidade: 0,

        },

        {
            id: 4,
            nome: "Memória Gamer Husky Gaming, 8GB, 2666MHz, DDR4, CL19, Preto - HGMF001",
            img: '..//assets/memoria.png',
            precoAntigo: 128.99,
            precoAtual: 109.99,
            parcelas: 5,
            parcelamento: 25.88, // 5x
            quantidade: 0,

        },

        {
            id: 4,
            nome: "Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2",
            img: '..//assets/mousered.png',
            precoAntigo: 119.99,
            precoAtual: 99.80,
            parcelas: 4,
            parcelamento: 29.35, // 4x
            quantidade: 0,

        },

        {
            id: 5,
            nome: "Teclado Mecânico Gamer Redragon Kumara, Anti-Ghosting, RGB, Switch Outemu Brown, ABNT2, Preto, PT - K552RGB-1 (PT-BROWN)",
            img: '..//assets/tecla.png',
            precoAntigo: 227.99,
            precoAtual: 199.99,
            parcelas: 9,
            parcelamento: 26.14, // 9x
            quantidade: 0,

        },

        {
            id: 6,
            nome: "SSD 240 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 350MB/s - SA400S37/240G",
            img: '..//assets/ssd.png',
            precoAntigo: 168.99,
            precoAtual: 122.31,
            parcelas: 5,
            parcelamento: 27.18, // 5x
            quantidade: 0,

        },




    ]

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


