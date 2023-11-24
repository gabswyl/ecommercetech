import scrollAnimacao from './modules/scroll.js'
import menuAnimacao from './modules/menu.js'
import newsletter from './modules/newsletter.js';
import footer from './modules/footer.js'
import carrinhoCompras from './modules/carrinhodecompras.js'
import dropdownCarrinho from './modules/carrinhoDropdown.js'
import adicionandoProdutosTech from './modules/produtosDinamicos.js'
import carrinhodeCompras from './modules/carrinhodecompras.js'

footer(); 
dropdownCarrinho();
carrinhoCompras(); 
newsletter(); 
menuAnimacao(); 
scrollAnimacao();
adicionandoProdutosTech();
carrinhodeCompras(); 


// plugin animacao 


if (window.SimpleAnime) {
    new SimpleAnime();
}

