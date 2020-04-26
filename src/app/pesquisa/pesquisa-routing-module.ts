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
        path : 'result',
        redirectTo : 'pesquisa/listar'
    },
    {
        path : 'result',
        component: ListarComponent
    },
    {
        path : "carro/:id/:filtro",
        component : CarroComponent
    }
]