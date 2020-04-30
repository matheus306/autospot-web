import { Component, OnInit } from '@angular/core';
import { FiltroPesquisa, PesquisaService } from '../shared'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  filtro = new FiltroPesquisa();
  result : any = [];

  constructor(private service : PesquisaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filtro.descricao = this.route.snapshot.params.filtro;
    this.filtrar()
  }

  filtrar() {
    this.service.pesquisarCarro(this.filtro).subscribe((data) => {
      this.result = data;
    });
  }
}
