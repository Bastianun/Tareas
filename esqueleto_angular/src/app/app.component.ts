import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esqueleto_angular';
}
