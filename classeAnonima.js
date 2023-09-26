"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "José";
        this.ultimoNome = "da silva";
    }
    getNomecompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
};
console.log(pessoa.getNomecompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempototal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma + item.duracao)
        return soma;
    }
};
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("flexões", 15);
treinadorPessoal.adicionarExercicios("agachamnetos", 20);
console.log("tempo total desnecessário para a rotina" +
    treinadorPessoal.calcularTempototal() + "em minutos");
