class salario {
    nome: string;
    cargo: string;
    salario: number


    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario
    }

    liquido(inss:number,imposto:number){
        let valorInss = (this.salario/100)*inss;
        let valorImposto = (this.salario/100)*imposto;
        let salarioLiquido = (this.salario-valorInss)-valorImposto;
        this.salario = salarioLiquido;
            return "ola " + this.nome + " do cargo " + this.cargo + " seu saldo bruto é " + this.salario +
             " mas seu seu salario liquido sera de" + salarioLiquido + " tendo o desconto de inss de"+ valorInss + " e do imposto" + valorImposto;
    }
    aumento(aumento:number){
        let valorAumento = (this.salario/ 100)* aumento;
        let salarioFinal = valorAumento+this.salario;
        this.salario = salarioFinal;    
        return "ola " + this.nome + " do cargo " + this.cargo + " seu saldo bruto é " + this.salario;
    }
    final() {
        return "ola " + this.nome + " do cargo " + this.cargo + " seu saldo liquido final é" + this.salario;
    }

}
let trrabalhador1 = new salario("ana silva", "analista de vendas", 3000);
console.log(trrabalhador1.liquido(11, 7.5));
console.log(trrabalhador1.aumento(10));
console.log(trrabalhador1.final());

let trrabalhador2 = new salario("felipe", "analista de vendas", 2000);
console.log(trrabalhador2.liquido(11, 7.5));
console.log(trrabalhador2.aumento(10));
console.log(trrabalhador2.final());