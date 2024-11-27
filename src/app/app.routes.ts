import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerosComponent } from './generos/generos.component';
import { ResenhasComponent } from './resenhas/resenhas.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'generos', component: GenerosComponent },
  { path: 'resenhas', component: ResenhasComponent },
  { path: 'lancamentos', component: LancamentosComponent },
];