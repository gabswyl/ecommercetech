
// menu mobile responsivo
function menuResponsive() {
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

menuResponsive();

// newsletter 

function newSletterResponsive() {
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

newSletterResponsive();


// footer responsivo 

function footerResponsive() {

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

footerResponsive();

// plugin animacao 


if (window.SimpleAnime) {
    new SimpleAnime();
}

// lista de carrinho dropdown 


function listShopDrop() {
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

listShopDrop();


// produtos dinamicos do site 

function produtosDinamicos() {
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

    listProdutos = () => {
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

produtosDinamicos();

// carrinho de compras dinamico 


function adicionandoProdutos() {
    const botaoCompra = document.querySelectorAll('.comprar_card')
    
    
    botaoCompra.forEach(function (item, index, array) {
        item.addEventListener('click', (event) => {
            const selecionar = event.target.closest('.comprar_card')
            const info = selecionar.parentElement;
            const imagemProduto = info.querySelector('.fone_card img')
            const srcImg = imagemProduto.src
            const nomeProduto = info.querySelector('.title_card')
            
            // precos 
            const precoProduto = info.querySelector('.preco2_card')
            const precoTexto = precoProduto.textContent;
            const precoNumerico = precoTexto.match(/\d+/); // para localizar numero 
            
            const compraBar = document.querySelector('.bar_product')
            const produtoVazio = document.querySelector('.bar_vazio')
            produtoVazio.innerText = " "
            
            compraBar.innerHTML += `
            <div class="bar_grid">
            <img src="${srcImg}">
            <p>${nomeProduto.innerText}</p>
            <div>
            <button class="bar_aumentar"><img src="./assets/mais.svg"></button>
            <input type="number" value="1" class="aumentarPreco">
            <button class="bar_diminuir"><img src="./assets/menos.svg"></button>
            </div>
                <p class="bar_price">Preço: R$${precoNumerico[0]}</p>

                <button class="removerProduto">Remover</button>
                </div>
                `
                
                // ativar classe 
                
                // ativar classe 
                const cepCarrinho = document.querySelectorAll(".barcep_grid");
                const subTotalCarrinho = document.querySelectorAll(".barsubtotal_grid");
                
                cepCarrinho.forEach(function (element) {
                    element.classList.add('ativo');
                });
                
                subTotalCarrinho.forEach(function (element) {
                    element.classList.add('ativo');
                });

                
                
            removerProduto();
            alteracaoInput();
            attPrice();
                
            })
            
        })
    }
    
    
    adicionandoProdutos(); 
    
    
    
    
    function removerProduto() {
        const removerProdutos = document.querySelectorAll('.removerProduto');
    
        removerProdutos.forEach(botao => {
            botao.addEventListener('click', () => {
                const containerProduto = botao.closest('.bar_grid');
                containerProduto.remove();
            });
        });
    }
    
    removerProduto();
    
    // function alteracaoInput() {
    //     const aumentarPrecoInput = document.querySelectorAll('.aumentarPreco');
    //     const buttonsAumentar = document.querySelectorAll('.bar_aumentar');
    //     const buttonsDiminuir = document.querySelectorAll('.bar_diminuir');
        
    //     aumentarPrecoInput.forEach(function (input) { // atualizar o preco mudando o valor atraves do input
    //         input.addEventListener('input', attPrice);
    //     });
        
    //     buttonsAumentar.forEach((button, index) => { // atualizar o preco mudando o valor atraves do botao aumentar pra aumentar o valor do input
    //         button.addEventListener('click', () => {
    //             aumentarPrecoInput[index].value = parseInt(aumentarPrecoInput[index].value) + 1;
    //             attPrice();
    //         });
    //     });
        
    //     buttonsDiminuir.forEach((button, index) => { // atualizar o preco mudando o valor atraves do botao aumentar pra diminuir o valor do input
    //         button.addEventListener('click', () => {
    //             const inputValor = parseInt(aumentarPrecoInput[index].value);
                
    //             if (inputValor > 0) {
    //                 aumentarPrecoInput[index].value = inputValor - 1;
    //             }
                
    //             attPrice();
    //         });
    //     });
    // }
    
    // alteracaoInput();
    

    // function attPrice() { // atualizar o preco
    //     const produtos = document.querySelectorAll('.bar_grid');
    //     console.log(produtos);
    //     let total = 0;
        
    //     for (let i = 0; i < produtos.length; i++) {
    //         const precoProduto = produtos[i].querySelector('.bar_price');
    //         const strPreco = precoProduto.innerText.replace("R$", "").replace(",", ".");
            
    //         const qntdProdutos = produtos[i].querySelector('.aumentarPreco');
    //         const valueQntdProduto = qntdProdutos.value;
            
    //         total += parseFloat(strPreco) * parseInt(valueQntdProduto);
    //     }
        
    //     const precoSub = document.querySelector(".priceSubtotal");
    //     precoSub.innerText = "R$" + total.toFixed();
    // }

    // attPrice(); 
    
    
    // scroll animacao 


function scrollAnimacao() {
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

scrollAnimacao();