import { Component } from '@angular/core';
import { Biblioteca } from '../models/biblioteca.model';
import { JogoTabuleiro } from '../models/jogo-tabuleiro.model';
import { JogoCarta } from '../models/jogo-carta.model';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../biblioteca.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.css'
})
export class ListaJogosComponent {
 jogos: any[] = []; 

  titulo: string = '';
  ano: number | null = null;
  fabricante: string = '';
  tipo: string = 'tabuleiro';

  constructor(private bibliotecaService: BibliotecaService) {
    this.atualizarListaJogos();
  }

  atualizarListaJogos(): void {
    this.jogos = this.bibliotecaService.listarJogos();
  }

  adicionarJogo(): void {
    if (this.tipo === 'tabuleiro') {
      this.bibliotecaService.adicionarJogo(
        new JogoTabuleiro(this.titulo, this.ano!, this.fabricante, 4)
      );
    } else {
      this.bibliotecaService.adicionarJogo(
        new JogoCarta(this.titulo, this.ano!, this.fabricante, 10)
      );
    }
    this.atualizarListaJogos();
    this.resetarFormulario();
  }

  resetarFormulario(): void {
    this.titulo = '';
    this.ano = null;
    this.fabricante = '';
    this.tipo = 'tabuleiro';
  }

  removerJogo(titulo: string): void {
    this.bibliotecaService.removerJogo(titulo);
    this.atualizarListaJogos();
  }
}