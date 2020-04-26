import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FiltroPesquisa, ResultaPesquisa} from "./index"

const BASE_URL : string = "http://167.86.92.50:8080/api/autospot/";

@Injectable({
  providedIn: 'root'
})

export class PesquisaService {
  constructor(public client: HttpClient) { }

  pesquisarCarro(filtro: FiltroPesquisa) {
    return this.client.get<ResultaPesquisa>(BASE_URL.concat('filtrar-carros/'+filtro.descricao));
  }

  recuperarNoticias(id: number) {
    return this.client.get<ResultaPesquisa>(BASE_URL.concat('noticias-carro/'+id));
  }
}
