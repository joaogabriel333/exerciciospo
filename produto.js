"use strict";
class Produtos {
    constructor(preco, nome) {
        this.preco = preco;
        this.nome = nome;
    }
    apresentar() {
        return "ola esse" + this.nome + "tem o valor de" + this.preco + "reais.";
    }
    descontar(desconto) {
        let valorDesconto = (this.preco / 100) * desconto;
        return "desconto de" + desconto + "%aplicado, novo preço" + (this.preco - valorDesconto);
    }
}
let produto1 = new Produtos(1500, "computador");
console.log(produto1.apresentar());
console.log(produto1.descontar(10));
let produto2 = new Produtos(5000, "iphone");
console.log(produto2.apresentar());
console.log(produto2.descontar(16));
let produto3 = new Produtos(4000, "sansung");
console.log(produto3.apresentar());
console.log(produto3.descontar(10));
