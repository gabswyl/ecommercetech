// carrinho

export default  function adicionandoProdutos() {
    const botaoCompra = document.querySelectorAll('.comprar_card')

    botaoCompra.forEach(function (item) {
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

            // verificacao se já existe item no carrinho 

            const compraBar = document.querySelector('.bar_product')
            const produtoVazio = document.querySelector('.bar_vazio')
            produtoVazio.innerText = " "

            compraBar.innerHTML += `
            <div class="bar_grid">
            <img src="${srcImg}">
            <p class="nome_produto">${nomeProduto.innerText}</p>
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
            const cepCarrinho = document.querySelectorAll(".barcep_grid");
            const subTotalCarrinho = document.querySelectorAll(".barsubtotal_grid");

            cepCarrinho.forEach(function (element) {
                element.classList.add('ativo');
            });

            subTotalCarrinho.forEach(function (element) {
                element.classList.add('ativo');
            });

            // atualizar preco 


            function atualizandoPreço() {
                const carrinhoProdutos = document.querySelectorAll(".bar_price");

                let totalzin = 0
                carrinhoProdutos.forEach((item) => {
                    const strPrice = item.textContent
                    const removendoCaracter = strPrice.replace("Preço: R$", "")

                    const qntdProduto = document.querySelector(".aumentarPreco")
                    const qntdProdutoValor = qntdProduto.value


                    totalzin += parseInt(removendoCaracter) * parseInt(qntdProdutoValor)
                })

                const subTotalProdutos = document.querySelector(".priceSubtotal")
                subTotalProdutos.innerText = "R$" + totalzin.toFixed();

            }

            atualizandoPreço();

            // alterar o input clicando + e - 
            
            const buttonsAumentar = document.querySelectorAll('.bar_aumentar');
            const buttonsDiminuir = document.querySelectorAll('.bar_diminuir');
            const aumentarPrecoInput = document.querySelectorAll('.aumentarPreco');
            
            aumentarPrecoInput.forEach((input) => {
                input.addEventListener("input", atualizandoPreço)
            })

            buttonsAumentar.forEach((button, index) => {
                button.addEventListener('click', () => {
                    aumentarPrecoInput[index].value = parseInt(aumentarPrecoInput[index].value) + 1;
                    atualizandoPreço(); 
                })
            })

            buttonsDiminuir.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const inputValor = parseInt(aumentarPrecoInput[index].value);

                    if (inputValor > 1) {
                        aumentarPrecoInput[index].value = inputValor - 1;
                    }

                    atualizandoPreço();

                })
            })

            removerProduto();

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