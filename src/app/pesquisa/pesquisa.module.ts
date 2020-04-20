import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaService } from './shared'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ListarComponent } from './listar';

@NgModule({
  declarations: [
      PesquisaComponent,
      ListarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PesquisaService
  ]
})
export class PesquisaModule { }
