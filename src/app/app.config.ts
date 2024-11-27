import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerosComponent } from './generos/generos.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { ResenhasComponent } from './resenhas/resenhas.component';

export const appConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'generos', component: GenerosComponent },
        { path: 'lancamentos', component: LancamentosComponent },
        { path: 'resenhas', component: ResenhasComponent },
        { path: '**', redirectTo: '' }
      ])
    )
  ]
};