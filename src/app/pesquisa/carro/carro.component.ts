import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { PesquisaService } from "../shared"

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})

export class CarroComponent implements OnInit {

  id : number = null;
  filtro : string = null;
  dados = [];

  constructor(private route : ActivatedRoute, private service : PesquisaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.filtro = this.route.snapshot.params.filtro
    this.service.recuperarNoticias(this.id).subscribe(res => console.log(res))
  }
}
