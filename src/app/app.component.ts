import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pini Express';
  nombre = 'Halejandro';
  edad = 37;
  comida = 'Patacón con carne en bistec';
  bebida = 'Jugo de Maracuyá';
}
