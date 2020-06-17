import React, {Component} from 'react'
import Main from '../template/Main'
import axios from 'axios'
import './naves.css'
const navesProps = {
    icon: 'fighter-jet',
    title: 'Naves',
    subtitle: 'Naves vistas nos filmes!'
}

export default class Naves extends Component {
    constructor(props){
        super(props)
        this.state = {
            naves:[],

        }

        this.getNaves = this.getNaves.bind(this)
    }

    getNaves(){
        return axios.get("https://swapi.dev/api/starships")
        .then((response)=>{
           // console.log(response.data.results)
            this.setState({naves: response.data.results})
        })
    }

    componentDidMount(){
        this.getNaves()
    }

    render() {
        const {naves} = this.state
        return (
            <Main {...navesProps}>
                <div>
                    <h2>Naves</h2>
                    {naves.map(nave =>(
                        <ul className="list-group list"
                            key={nave.name}>
                                <li className="list-group-item list-group-item-dark">
                                    Nome: {nave.name}
                                </li>

                                <li className="list-group-item" key ={nave.model}>
                                Modelo: {nave.model}
                                </li>

                                <li className="list-group-item" key ={nave.starship_class}>
                                Classe: {nave.starship_class}
                                </li>

                                <li className="list-group-item" key ={nave.passengers}>
                                Passageiros: {nave.passengers}
                                </li>

                               

                                

                                
    
                        </ul>
                    
                    ))}
                </div>

                
            </Main> 
        )
    }
}