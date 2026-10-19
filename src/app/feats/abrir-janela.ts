import { Service, signal } from '@angular/core';

@Service()
export class AbrirJanela {
  janelasAbertas = signal<string[]>([]); 

  abrir(pasta: string) {
    this.janelasAbertas.update((janelas) =>
      janelas.includes(pasta) ? janelas : [...janelas, pasta],
    ); // includes() verifica se determinado valor existe em um array. Ela retorna true ou false.
  }
   fechar(pasta: string){
    this.janelasAbertas.update(janelas =>
      janelas.filter(janela => janela !== pasta)
    );
  }
}
