import { Component, OnInit } from '@angular/core';
import { FiltroPesquisa } from '../shared';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {

  filtro = new FiltroPesquisa();

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit(){}

  carregarTelaResultado(){
    this.router.navigateByUrl(`/result?filtro=${this.filtro.descricao}`);
  }

}
