import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Marcar como componente standalone
  imports: [RouterModule], // Importando o RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notícias de Filmes';
}
