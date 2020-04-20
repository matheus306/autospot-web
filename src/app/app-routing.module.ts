import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaRoutes } from './pesquisa'

const routes: Routes = [
  { path: '',   redirectTo: '/pesquisa', pathMatch: 'full' },
  ...PesquisaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
