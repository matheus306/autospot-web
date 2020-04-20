import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroPesquisa, ResultaPesquisa} from "./index"

const BASE_URL : string = "http://167.86.92.50:8080/api/autospot/filtrar-carros/";

@Injectable({
  providedIn: 'root'
})

export class PesquisaService {
  constructor(public client: HttpClient) { }

  pesquisarCarro(filtro: FiltroPesquisa) {
    return this.client.get<ResultaPesquisa>(BASE_URL.concat(filtro.descricao));
  }
}
