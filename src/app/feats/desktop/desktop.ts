import { Component } from '@angular/core';
import { Nav } from '../shared/nav/nav';
import { Pastas } from '../pastas/pastas';

@Component({
  imports: [Nav, Pastas],
  selector: 'app-desktop',
  styleUrl: './desktop.css',
  templateUrl: './desktop.html',
})
export class Desktop {}
