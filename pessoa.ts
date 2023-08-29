class Pessoa{
    nome: string;
    idade: number;
    comidas: string[];

    constructor(nome: string, idade: number, comidas: string[]){
        this.nome= nome;
        this.idade= idade;
        this.comidas= comidas;
        
    }

    cumprimentar(){
        let msgHabilitacao= " ja posso tirar minha CNH";
        if(this.idade < 18)

        {
            msgHabilitacao= " Não posso tirar minha CNH";
        }
 
        return "Olá meu nome é " + this.nome 
         " e tenho "+ this.idade + " anos" + msgHabilitacao + "." 

    }
    comidasFavoritas(){
        console.log("Minha(s) comida(s) favoritas(s)")
        for(let i=0; i < this.comidas.length; i++ ){
            console.log(this.comidas[i]);
        }
    }
}

let pessoa1 =
 new Pessoa("joao gabriel" , 18, ["doguinho","lasanha"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());

