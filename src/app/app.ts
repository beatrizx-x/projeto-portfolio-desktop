import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Desktop } from './feats/desktop/desktop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Desktop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-portfolio-desktop');
}
