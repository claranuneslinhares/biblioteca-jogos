export abstract class Jogo {
    constructor(
      public titulo: string,
      public anoPublicacao: number,
      public fabricante: string
    ) {}
  
    abstract exibirRegras(): string;
  }