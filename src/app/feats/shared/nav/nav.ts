import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbrirJanela } from '../../abrir-janela';

@Component({
  imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {

abrirPasta = inject(AbrirJanela);

}
