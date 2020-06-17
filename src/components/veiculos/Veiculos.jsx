import React, {Component} from 'react'
import Main from '../template/Main'
import axios from 'axios'
import './veiculos.css'

const veiculosProps ={
    icon: 'car',
    title: 'Veículos',
    subtitle: 'Lista de veículos!'
}

export default class Veiculos extends Component {
    constructor(props){
        super(props)
        this.state = {
            veiculos:[],

        }

        this.getVeiculos = this.getVeiculos.bind(this)
    }

    getVeiculos(){
        return axios.get("https://swapi.dev/api/vehicles")
        .then((response)=>{
           // console.log(response.data.results)
            this.setState({veiculos: response.data.results})
        })
    }

    componentDidMount(){
        this.getVeiculos()
    }

    render() {
        const {veiculos} = this.state
        return (
            <Main {...veiculosProps}>
                <div>
                    <h2>Veículos</h2>
                    {veiculos.map(veiculo =>(
                        <ul className="list-group list"
                            key={veiculo.name}>
                                <li className="list-group-item list-group-item-dark">
                                    Nome: {veiculo.name}
                                </li>

                                <li className="list-group-item" key ={veiculo.model}>
                                Modelo: {veiculo.model}
                                </li>

                                <li className="list-group-item" key ={veiculo.vehicle_class}>
                                Classe: {veiculo.vehicle_class}
                                </li>

                                <li className="list-group-item" key ={veiculo.manufacturer}>
                                Fabricante: {veiculo.manufacturer}
                                </li>

                        </ul>
                    
                    ))}
                </div>

                
            </Main> 
        )
    }
}