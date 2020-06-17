import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Filmes from '../components/filmes/Filmes'
import Especie from '../components/especie/Especie'
import Naves from '../components/naves/Naves'
import Personagens from '../components/personagens/Personagens'
import Planetas from '../components/planetas/Planetas'
import Veiculos from '../components/veiculos/Veiculos'




export default props =>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/filmes" component={Filmes}></Route>
        <Route path="/especies" component={Especie}></Route>
        <Route path="/naves" component={Naves}></Route>
        <Route path="/personagens" component={Personagens}></Route>
        <Route path="/planetas" component={Planetas}></Route>
        <Route path="/veiculos" component={Veiculos}></Route>


        
        

        
        <Redirect from="*" to="/"></Redirect>
    </Switch>