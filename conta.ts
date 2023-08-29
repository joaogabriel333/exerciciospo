class contaBancaria {
    nomeTitular: string;
    saldoAtual: number;

    constructor(nomeTitular: string, saldoAtual: number) {
        this.nomeTitular = nomeTitular;
        this.saldoAtual = saldoAtual;
    }

    minhaConta() {
       return "ola " + this.nomeTitular + " seu saldo é " + this.saldoAtual
    }
    deposito(deposito:number){
        let SaldoFinal=this.saldoAtual+deposito;
        this.saldoAtual=SaldoFinal;
      return "ola " + this.nomeTitular + " com o depósito seu saldo é" +SaldoFinal
    }
    saque(saque:number){
        let possaque = this.saldoAtual-saque;
        let valorAceito = "sua conta nao pode efetuar esse saque"
        this.saldoAtual=possaque
        if (saque <= 1500){
            valorAceito="ola voce efetuou um saque de " + saque + "o saque foi efetuado, seu saldo agora é de: "+ possaque;
        }
        return valorAceito + "."
    }

    saqueFinal(Final:number){
        let saqueFinal = this.saldoAtual-Final;
        let valorAceito = "sua conta nao pode efetuar esse valor de saque";
        if(Final <= this.saldoAtual){
            this.saldoAtual = saqueFinal;
            valorAceito = "ola voce efetuou um saque de " + Final + "o saque foi efetuado seu saldo agora e de " + saqueFinal;
        }
        return valorAceito + "."

    }
    saldoFinal(){
        return "ola" + this.nomeTitular + "o seu saldo e de" + this.saldoAtual+"."
    }
}
let conta = new contaBancaria("joao", 1000 );
console.log(conta.minhaConta());
console.log(conta.deposito(500));
console.log(conta.saque(2000));
console.log(conta.saqueFinal(1500));
console.log(conta.saldoFinal());


let conta2 = new contaBancaria("gui", 1000 );
console.log(conta2.minhaConta());
console.log(conta2.deposito(500));
console.log(conta2.saque(2000));
console.log(conta2.saqueFinal(1500));
console.log(conta2.saldoFinal());

let conta3 = new contaBancaria("gui", 1000 );
console.log(conta3.minhaConta());
console.log(conta3.deposito(500));
console.log(conta3.saque(2000));
console.log(conta3.saqueFinal(1500));
console.log(conta3.saldoFinal());