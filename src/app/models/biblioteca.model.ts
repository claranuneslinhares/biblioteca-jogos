import { Jogo } from './jogo.model';

export class Biblioteca {
  private jogos: Jogo[] = [];

  adicionarJogo(jogo: Jogo): void {
    this.jogos.push(jogo);
  }

  removerJogo(titulo: string): void {
    this.jogos = this.jogos.filter(jogo => jogo.titulo !== titulo);
  }

  listarJogos(): Jogo[] {
    return this.jogos;
  }
}
