import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbrirJanela } from '../abrir-janela';
import { SobreMim } from '../sobre-mim/sobre-mim';
import { Contato } from '../contato/contato';
import { Mensagem } from '../mensagem/mensagem';
import { Projetos } from '../projetos/projetos';
import { Curriculo } from '../curriculo/curriculo';
import { Entra21 } from '../entra21/entra21';
import { Spotfy } from '../spotfy/spotfy';
import { TrilhaSonora } from '../trilha-sonora/trilha-sonora';
import { Game } from '../game/game';
import { Calendario } from '../calendario/calendario';
import { Janela } from '../janela/janela';

@Component({
  imports: [RouterLink, SobreMim, Contato, Mensagem, Projetos, Curriculo, Entra21, Spotfy, TrilhaSonora, Game, Calendario, Janela],
  selector: 'app-pastas',
  styleUrl: './pastas.css',
  templateUrl: './pastas.html',
})
export class Pastas {

  abrirPasta = inject(AbrirJanela);

}
