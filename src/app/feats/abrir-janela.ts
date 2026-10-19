import { Service, signal } from '@angular/core';

interface JanelaAberta {
  id: string;
  minimizada: boolean;
}

@Service()
export class AbrirJanela {
  janelasAbertas = signal<JanelaAberta[]>([]);

  
abrir(pasta: string) {
  this.janelasAbertas.update((janelas) => {
    const existente = janelas.find(
      (janela) => janela.id === pasta
    );

    if (existente) {
      return janelas.map((janela) =>
        janela.id === pasta
          ? { ...janela, minimizada: false }
          : janela
      );
    }

    return [...janelas, { id: pasta, minimizada: false }];
  })} 

  fechar(pasta: string) {
    this.janelasAbertas.update((janelas) => janelas.filter((janela) => janela.id !== pasta)); //filter() → cria uma nova array mantendo os itens que atendem à condição.
  }
minimizar(pasta: string) {
  this.janelasAbertas.update(janelas =>
    janelas.map(janela =>
      janela.id === pasta
        ? { ...janela, minimizada: true }
        : janela
    )
  );
}

restaurar(pasta: string) {
  this.janelasAbertas.update(janelas =>
    janelas.map(janela =>
      janela.id === pasta
        ? { ...janela, minimizada: false }
        : janela
    )
  );
}
}
