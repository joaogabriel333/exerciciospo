"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEvento(Evento) {
        this.eventos.push(Evento);
    }
    visualizarEvento() {
        console.log("Os eventos da minha agenda são");
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + "na data" + this.eventos[i].data + this.eventos[i].horario);
        }
    }
    removerEvento(evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}
const evento1 = new Evento("festa de aniversario", " 15/11 ", "20:00");
const evento2 = new Evento("Show de teto", " 20/11 ", "20:00");
const evento3 = new Evento("reuniao", " 16/11 ", "20:00");
const AgendaList = new Agenda();
AgendaList.adicionarEvento(evento1);
AgendaList.adicionarEvento(evento2);
AgendaList.adicionarEvento(evento3);
console.log(AgendaList.visualizarEvento());
console.log(AgendaList.visualizarEvento());
