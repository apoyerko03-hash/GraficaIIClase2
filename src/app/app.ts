import { Component } from '@angular/core';
import { EditorFiltroComponent } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GraficaClase2');
}
