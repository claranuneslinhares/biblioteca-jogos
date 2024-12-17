import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ListaJogosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca-jogos';
}
