import { Component, OnInit } from '@angular/core';
import { FiltroPesquisa, PesquisaService, ResultaPesquisa } from '../shared'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  filtro = new FiltroPesquisa();
  result = [];

  constructor(private service : PesquisaService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro.descricao = params['filtro'];
      this.service.pesquisarCarro(this.filtro).subscribe((data) => {
        this.result = this.result.concat(data);
      });
    });
  }
}
