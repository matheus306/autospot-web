import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaService } from './shared'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ListarComponent } from './listar';
import { CarroComponent } from './carro';

@NgModule({
  declarations: [
      PesquisaComponent,
      ListarComponent,
      CarroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PesquisaService
  ]
})
export class PesquisaModule { }
