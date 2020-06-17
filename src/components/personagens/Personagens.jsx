import React, {Component} from 'react'
import Main from '../template/Main'
import './personagem.css'
import axios from 'axios'

const personagensProps ={
    icon: 'user-circle',
    title: 'Personagens',
    subtitle: 'Lista de personagens!'
}



export default class Personagens extends Component {
    constructor(props){
        super(props)
        this.state = {
            people:[],
        }
        
        this.getPeole = this.getPeole.bind(this)

    }

    getPeole(){
        return axios.get("https://swapi.dev/api/people")
        .then((response) =>{
            //console.log(response.data.results)
            this.setState({people: response.data.results})
        })
    }

    componentDidMount(){
        this.getPeole()
    }

  
    render() {
       const {people} = this.state
        return (
            <Main {...personagensProps}>
                <div>
                    <h1>Personagens</h1>
                    {people.map(personage =>(
                        <ul  className="list-group list"
                         key={personage.name}>
                            <li  className="list-group-item list-group-item-dark">
                                Nome: {personage.name} 
                            </li>

                            <li className="list-group-item" key ={personage.gender}>
                                Genero: {personage.gender}
                            </li>

                            <li className="list-group-item" key ={personage.mass}>
                                Peso: {personage.mass}
                            </li>

                            <li className="list-group-item" key ={personage.height}>
                                altura: {personage.height}
                            </li>

                            <li className="list-group-item" key ={personage.homeworld}>
                                Planeta de origem: {personage.homeworld}
                            </li>
                        </ul>
                    ))}
                    
                </div>
                
                
            </Main>
        )
    }
}