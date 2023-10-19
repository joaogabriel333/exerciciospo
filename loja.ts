class ProdutoLoja{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class CarrinhoDeCompras{
    produtosDoCarrinho: ProdutoLoja[] = [];
    constructor() {
        //this.produtosDoCarrinho = [];
    }

    adicionarProduto(produto : ProdutoLoja){
        this.produtosDoCarrinho.push(produto);
    }

    excluirProduto(nomeDoProduto: string) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) =>item.nome !== nomeDoProduto);
    }

    excluirProduto2(produto: ProdutoLoja) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item =>item.nome !== produto.nome);
    }

    calcularValorTotal(){
        let soma = 0;
        for (let i = 0; 1< this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2); 
    }

    exibirProdutos(){
        console.log("Produtos do Carrinho:");
      //  for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
      //      console.log("Produto:" + this.produtosDoCarrinho[i].nome
      //     + "R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
      //  }
    }
}

class loja {
    produtosDoEstoque: ProdutoLoja[] = []
    carrinhoDeCompra = new CarrinhoDeCompras();
    
    constructor(){

    }
    adicionarProdutoAoEstoque(produto: ProdutoLoja){
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto:ProdutoLoja){
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== produto.nome)
    }

    adicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome === produto.nome);
        if (produtoEncontrado){
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else{
            return "Produto não encontrado ao estoque da loja";
        }
    }

    removerProdutoDoCarrinho(produto: ProdutoLoja){
        //this.carrinhoDeCompra.excluirProduto(produto.nome);
        this.carrinhoDeCompra.excluirProduto2(produto);
    }

    exibirProdutosDoCarrinho(){
        this.carrinhoDeCompra.exibirProdutos();
    }
}
// Criando Produtos 
const ProdutoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const ProdutoLoja2 = new ProdutoLoja("Calça", 49.99);
const ProdutoLoja3 = new ProdutoLoja("Sapato", 79.90);
const ProdutoLoja4 = new ProdutoLoja("Meia", 20.00);

// Criando Loja 
const minhaLoja = new loja();

//Adicionando Produto ao Estoque 
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);

//Adicionando Produto ao Carrinho de Compras 
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);

//Remover Produto do Carrinho de Compra 
minhaLoja.removerProdutoDoCarrinho(ProdutoLoja4);

//Remover Produto do Estoque da Loja 
minhaLoja.removerProdutoDoEstoque(ProdutoLoja4);

//Exibindo produtos do carrinho de compra 
minhaLoja.exibirProdutosDoCarrinho();
minhaLoja.carrinhoDeCompra.exibirProdutos();

//Exibindo valor total do carrinho 
console.log("Total de carrinho de compras: R$"
+ minhaLoja.carrinhoDeCompra.calcularValorTotal());

