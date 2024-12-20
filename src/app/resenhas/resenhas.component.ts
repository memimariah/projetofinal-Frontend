import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importando CommonModule para *ngFor
import { FormsModule } from '@angular/forms';   // Importando FormsModule para ngModel

@Component({
  selector: 'app-resenhas',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Adicionando os módulos necessários
  template: `
    <div class="resenhas-container">
      <h2>Resenhas de Filmes</h2>

      <!-- Formulário de inserção de resenha -->
      <form (ngSubmit)="adicionarResenha(titulo, avaliacao, comentario)" class="resenha-form">
        <div class="form-group">
          <label for="titulo">Título do Filme:</label>
          <input 
            [(ngModel)]="titulo" 
            name="titulo" 
            placeholder="Digite o título do filme" 
            required 
            id="titulo"
          />
        </div>

        <div class="form-group">
          <label for="avaliacao">Avaliação (1-5):</label>
          <input 
            [(ngModel)]="avaliacao" 
            name="avaliacao" 
            type="number" 
            min="1" 
            max="5" 
            required 
            id="avaliacao"
          />
        </div>

        <div class="form-group">
          <label for="comentario">Comentário:</label>
          <textarea 
            [(ngModel)]="comentario" 
            name="comentario" 
            placeholder="Deixe seu comentário sobre o filme" 
            required 
            id="comentario">
          </textarea>
        </div>

        <button type="submit">Adicionar Resenha</button>
      </form>

      <!-- Exibição das resenhas -->
      <div class="resenhas-list">
        <h3>Resenhas:</h3>
        <ul>
          <li *ngFor="let resenha of resenhas">
            <strong>{{ resenha.titulo }}</strong> ({{ resenha.avaliacao }}): <em>{{ resenha.comentario }}</em>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./resenhas.component.css']  // A referência para o CSS
})
export class ResenhasComponent {
  titulo: string = '';
  avaliacao: number | null = null;
  comentario: string = '';
  resenhas: { titulo: string, avaliacao: number, comentario: string }[] = [];

  adicionarResenha(titulo: string, avaliacao: number | null, comentario: string) {
    if (avaliacao !== null) {
      this.resenhas.push({ titulo, avaliacao, comentario });
    }
  }
}
