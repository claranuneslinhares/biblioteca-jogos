import { Jogo } from './jogo.model';

export class JogoCarta extends Jogo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    fabricante: string,
    public idadeMinima: number
  ) {
    super(titulo, anoPublicacao, fabricante);
  }

  exibirRegras(): string {
    return `${this.titulo} é um jogo de cartas adequado para maiores de ${this.idadeMinima} anos.`;
  }
}
