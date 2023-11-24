// carrinho

export default function adicionandoProdutos() {
    const botaoCompra = document.querySelectorAll('.comprar_card')

    botaoCompra.forEach(function (item) {
        item.addEventListener('click', (event) => {

            // Pegando informações do produto selecionado 
            const selecionar = event.target.closest('.comprar_card')
            const info = selecionar.parentElement;
            const imagemProduto = info.querySelector('.fone_card img')
            const srcImg = imagemProduto.src
            const nomeProduto = info.querySelector('.title_card')
            const precoProduto = info.querySelector('.preco2_card')
            const precoTexto = precoProduto.textContent;
            const precoNumerico = precoTexto.match(/\d+/); // para localizar numero 

            const compraBar = document.querySelector('.bar_product')
            const produtoVazio = document.querySelector('.bar_vazio')
            produtoVazio.innerText = " "

            // Evitando duplicações de prdoutos no carrinho. 

            const produtosNoCarrinho = document.querySelectorAll('.bar_grid .nome_produto');
            let produtoJaNoCarrinho = false;

            produtosNoCarrinho.forEach((produto) => {
                if (produto.textContent === nomeProduto.innerText) {
                    produtoJaNoCarrinho = true;
                    const inputAumentar = produto.parentElement.querySelector('.aumentarPreco');
                    let inputValor = Number(inputAumentar.value);
                    let somar = inputValor + 1;
                    inputAumentar.value = somar;
                }
            });


            // Criação de produtos no carrinho de compras

            if (!produtoJaNoCarrinho) {

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


            }

            
            // contar o listagem de produtos com length


            const totalProdutos = document.querySelectorAll('.bar_grid').length;
            const contarProdutos = document.querySelector('.contagemProdutos')
            contarProdutos.textContent = totalProdutos


            // Ativar a classe do cep e subtotal quando for adicionado os produtos no carrinho de compra

            function ativarClasse() {
                const cepCarrinho = document.querySelector(".barcep_grid");
                const subTotalCarrinho = document.querySelector(".barsubtotal_grid");

                if (totalProdutos > 0) {
                    cepCarrinho.classList.add('ativo');
                    subTotalCarrinho.classList.add('ativo');
                }

            }

            ativarClasse();


            // atualizar preço

            function alterarInput() {
                const buttonsAumentar = document.querySelectorAll('.bar_aumentar');
                const buttonsDiminuir = document.querySelectorAll('.bar_diminuir');
                const aumentarPrecoInput = document.querySelectorAll('.aumentarPreco');

                aumentarPrecoInput.forEach((input) => {
                    input.addEventListener("input", atualizarPreco);
                });

                buttonsAumentar.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        aumentarPrecoInput[index].value = parseInt(aumentarPrecoInput[index].value) + 1;
                        atualizarPreco();
                    });
                });

                buttonsDiminuir.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        const inputValor = parseInt(aumentarPrecoInput[index].value);

                        if (inputValor > 1) {
                            aumentarPrecoInput[index].value = inputValor - 1;
                        }

                        atualizarPreco();
                    });
                });

            }

            // remoção de produtos

            function removerProduto() {
                const removerProdutos = document.querySelectorAll('.removerProduto');

                removerProdutos.forEach(botao => {
                    botao.addEventListener('click', () => {
                        const containerProduto = botao.closest('.bar_grid');
                        containerProduto.remove();

                        // se não conter nenhum produto no carrinho de compras apos a remoção, a função irá se executar.
                        function removerClasse() {
                            const totalProdutosAtualizado = document.querySelectorAll('.bar_grid').length; // atualizando o length se produto for removido 
                            const cepCarrinho = document.querySelector(".barcep_grid");
                            const subTotalCarrinho = document.querySelector(".barsubtotal_grid");


                            if (totalProdutosAtualizado == 0) {
                                cepCarrinho.classList.remove('ativo');
                                subTotalCarrinho.classList.remove('ativo');

                                produtoVazio.innerHTML = `
                                    <p class="barcarrinho_text">Seu carrinho está vazio</p>
                                     <p class="barcarrinho_text2">Não há produtos selecionado neste momento!</p>
                                    `

                                contarProdutos.textContent = totalProdutosAtualizado
                            }

                        }

                        removerClasse();


                        atualizarPreco();
                    });
                });


            }



            function atualizarPreco() {


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

            atualizarPreco();
            alterarInput();
            removerProduto();



        })







    })


}



adicionandoProdutos();



