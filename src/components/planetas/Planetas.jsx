import React, {Component} from 'react'
import Main from '../template/Main'
import './planetas.css'
import axios from  'axios'

const planetasProps ={
    icon: 'globe',
    title: 'Planetas',
    subtitle: 'Lista de planetas!'
}

export default class Planetas extends Component {
    constructor(props){
        super(props)
        this.state = {
            planetas:[],

        }

        this.getPlanetas = this.getPlanetas.bind(this)
    }

    getPlanetas(){
        return axios.get("https://swapi.dev/api/planets")
        .then((response)=>{
           // console.log(response.data.results)
            this.setState({planetas: response.data.results})
        })
    }

    componentDidMount(){
        this.getPlanetas()
    }

    render() {
        const {planetas} = this.state
        return (
            <Main {...planetasProps}>
                <div>
                    <h2>Planetas</h2>
                    {planetas.map(planeta =>(
                        <ul className="list-group list"
                            key={planeta.name}>
                                <li className="list-group-item list-group-item-dark">
                                    Nome: {planeta.name}
                                </li>

                                <li className="list-group-item" key ={planeta.diameter}>
                                Diâmetro (Km): {planeta.diameter}
                                </li>

                                <li className="list-group-item" key ={planeta.population}>
                                População: {planeta.population}
                                </li>

                                <li className="list-group-item" key ={planeta.climate}>
                                Clima: {planeta.climate}
                                </li>

                        </ul>
                    
                    ))}
                </div>

                
            </Main> 
        )
    }
}
