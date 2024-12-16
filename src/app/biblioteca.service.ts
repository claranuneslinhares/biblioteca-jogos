import { Injectable } from '@angular/core';
import { JogoTabuleiro } from '../models/jogo-tabuleiro.model';
import { JogoCarta } from '../models/jogo-carta.model';
import { Biblioteca } from '../models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private biblioteca: Biblioteca = new Biblioteca();

  constructor() { 
    this.biblioteca.adicionarJogo(new JogoTabuleiro('Monopoly', 1935, 'Hasbro', 2));
    this.biblioteca.adicionarJogo(new JogoCarta('Uno', 1971, 'Mattel', 7));
  }
  listarJogos() {
    return this.biblioteca.listarJogos();
  }

  adicionarJogo(jogo: JogoTabuleiro | JogoCarta) {
    this.biblioteca.adicionarJogo(jogo);
  }

  removerJogo(titulo: string) {
    this.biblioteca.removerJogo(titulo);
  }
}
