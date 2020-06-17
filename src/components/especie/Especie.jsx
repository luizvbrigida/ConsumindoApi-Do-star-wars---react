import React, {Component} from 'react'
import Main from '../template/Main'
import './especie.css'
import axios from 'axios'

const especieProps ={
    icon: 'users',
    title: 'Espécies',
    subtitle: 'Espécies vistas nos filmes!'
}

export default class Especie extends Component {
    constructor(props){
        super(props)
        this.state = {
            especies:[],

        }

        this.getEspecies = this.getEspecies.bind(this)
    }

    getEspecies(){
        return axios.get("https://swapi.dev/api/species")
        .then((response)=>{
           // console.log(response.data.results)
            this.setState({especies: response.data.results})
        })
    }

    componentDidMount(){
        this.getEspecies()
    }

    render() {
        const {especies} = this.state
        return (
            <Main {...especieProps}>
                <div>
                    <h2>Espécies</h2>
                    {especies.map(especie =>(
                        <ul className="list-group list"
                            key={especie.name}>
                                <li className="list-group-item list-group-item-dark">
                                    Nome: {especie.name}
                                </li>

                                <li className="list-group-item" key ={especie.classification}>
                                Classificação: {especie.classification}
                                </li>

                                <li className="list-group-item" key ={especie.average_lifespan}>
                                Média de tempo de vida: {especie.average_lifespan}
                                </li>

                                <li className="list-group-item" key ={especie.language}>
                                Idioma: {especie.language}
                                </li>


                        </ul>
                    
                    ))}
                </div>

                
            </Main> 
        )
    }
}