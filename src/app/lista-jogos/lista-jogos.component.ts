import { Component } from '@angular/core';
import { Biblioteca } from '../models/biblioteca.model';
import { JogoTabuleiro } from '../models/jogo-tabuleiro.model';
import { JogoCarta } from '../models/jogo-carta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.css'
})
export class ListaJogosComponent {
  biblioteca = new Biblioteca();
  jogos: any[] = [];

  constructor() {
  
    this.biblioteca.adicionarJogo(new JogoTabuleiro('Monopoly', 1935, 'Hasbro', 2));
    this.biblioteca.adicionarJogo(new JogoCarta('Uno', 1971, 'Mattel', 7));
    this.atualizarListaJogos();
  }

  atualizarListaJogos(): void {
    this.jogos = this.biblioteca.listarJogos();
  }

  adicionarJogo(titulo: string, ano: number, fabricante: string, tipo: string): void {
    if (tipo === 'tabuleiro') {
      this.biblioteca.adicionarJogo(new JogoTabuleiro(titulo, ano, fabricante, 4)); 
    } else {
      this.biblioteca.adicionarJogo(new JogoCarta(titulo, ano, fabricante, 10)); 
    }
    this.atualizarListaJogos();
  }

  removerJogo(titulo: string): void {
    this.biblioteca.removerJogo(titulo);
    this.atualizarListaJogos();
  }
}

