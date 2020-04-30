import { Routes } from "@angular/router";
import { PesquisaComponent } from "./pesquisa"
import { ListarComponent } from './listar'
import { CarroComponent } from './carro'

export const PesquisaRoutes : Routes = [
    {
        path : 'pesquisa',
        redirectTo : 'pesquisa/pesquisa'
    },
    {
        path : 'pesquisa',
        component: PesquisaComponent
    },
    {
        path : 'result/:filtro',
        component: ListarComponent
    },
    {
        path : "carro/:id/:filtro",
        component : CarroComponent
    }
]