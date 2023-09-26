const pessoa = new class {
    private primeiroNome = "José";
    private ultimoNome = "da silva";
    getNomecompleto() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomecompleto());

const treinadorPessoal = new class{
    private rotina: { nome: string, duracao: number }[] = [];

adicionarExercicios(nome: string, duracao: number): void {
    this.rotina.push({ nome, duracao });
}
calcularTempototal(): number { 
    let soma = 0;
    this.rotina.forEach(item => soma += item.duracao)
    //this.rotina.forEach(item => soma + item.duracao)
    return soma;}
    
}
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("flexões", 15);
treinadorPessoal.adicionarExercicios("agachamnetos", 20);

console.log("tempo total desnecessário para a rotina" +
    treinadorPessoal.calcularTempototal() + "em minutos");