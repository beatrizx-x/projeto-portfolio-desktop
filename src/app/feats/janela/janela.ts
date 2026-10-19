
import {
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';

import { AbrirJanela } from '../abrir-janela';

@Component({
  selector: 'app-janela',
  imports: [],
  styleUrl: './janela.css',
  templateUrl: './janela.html',
})
export class Janela {
  id = input<string>();

  abrirPasta = inject(AbrirJanela);
  private elemento = inject(ElementRef<HTMLElement>);

  maximizada = signal(false);
  minimizada = computed(() => {
    const id = this.id();

    if (!id) return false;

    return (
      this.abrirPasta
        .janelasAbertas()
        .find((janela) => janela.id === id)?.minimizada ?? false
    );
  });

  posicao = signal<{ x: number; y: number } | null>(null);
  segurando = signal(false);

  private arrastando = false;
  private inicioX = 0;
  private inicioY = 0;
  private janelaX = 0;
  private janelaY = 0;

  iniciarArraste(event: PointerEvent) {
    if (this.maximizada() || this.minimizada()) return;
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest('button')) return;

    const janela = this.elemento.nativeElement.firstElementChild;

    if (!(janela instanceof HTMLElement)) return;

    const retangulo = janela.getBoundingClientRect();

    this.janelaX = retangulo.left;
    this.janelaY = retangulo.top;
    this.inicioX = event.clientX;
    this.inicioY = event.clientY;

    this.arrastando = true;
    this.segurando.set(true);

    event.preventDefault();
  }

  @HostListener('document:pointermove', ['$event'])
  moverJanela(event: PointerEvent) {
    if (!this.arrastando) return;

    if (event.buttons === 0) {
      this.pararArraste();
      return;
    }

    if (this.maximizada()) {
      this.pararArraste();
      return;
    }

    this.posicao.set({
      x: this.janelaX + event.clientX - this.inicioX,
      y: this.janelaY + event.clientY - this.inicioY,
    });
  }

  @HostListener('document:pointerup')
  pararArraste() {
    this.arrastando = false;
    this.segurando.set(false);
  }

  @HostListener('document:pointercancel')
  cancelarArraste() {
    this.pararArraste();
  }

  minimizar() {
    const id = this.id();

    if (!id) return;

    this.pararArraste();
    this.abrirPasta.minimizar(id);
  }

  alternarMaximizar() {
    this.pararArraste();

    const vaiMaximizar = !this.maximizada();

    if (vaiMaximizar) {
      this.posicao.set(null);
    } else {
      // Ao restaurar, a janela volta a ser centralizada.
      this.posicao.set(null);
    }

    this.maximizada.set(vaiMaximizar);
  }

  fechar() {
    const id = this.id();

    if (!id) return;

    this.pararArraste();
    this.abrirPasta.fechar(id);
  }
}
