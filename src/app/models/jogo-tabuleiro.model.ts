import { Jogo } from './jogo.model';

export class JogoTabuleiro extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public numeroJogadores: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): string {
    return `${this.titulo} é um jogo de tabuleiro para ${this.numeroJogadores} jogadores.`;
  }
}
