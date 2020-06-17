import React, {Component} from 'react'
import Main from '../template/Main'
import axios from 'axios'
import './Filmes.css'


const filmesProps = {
    icon: 'film',
    title: 'Filmes',
    subtitle: 'Lista de filmes!'
}

export default class Filmes extends Component {

    constructor(props){
        super(props)
        this.state = {
            filmes:[],

        }

        this.getFilmes = this.getFilmes.bind(this)
    }

    getFilmes(){
        return axios.get("https://swapi.dev/api/films")
        .then((response)=>{
           // console.log(response.data.results)
            this.setState({filmes: response.data.results})
        })
    }

    componentDidMount(){
        this.getFilmes()
    }

    render() {
        const {filmes} = this.state
        return (
            <Main {...filmesProps}>
                <div>
                    <h2>Filmes</h2>
                    {filmes.map(filme =>(
                        <ul className="list-group list"
                            key={filme.title}>
                                <li className="list-group-item list-group-item-dark">
                                    Nome: {filme.title}
                                </li>

                                <li className="list-group-item" key ={filme.episode_id}>
                                Episódio: {filme.episode_id}
                                </li>

                                <li className="list-group-item" key ={filme.direcor}>
                                Diretor: {filme.director}
                                </li>

                                <li className="list-group-item" key ={filme.producer}>
                                Produtor (es) : {filme.producer}
                                </li>

                                <li className="list-group-item" key ={filme.release_date}>
                                Lançamento : {filme.release_date}
                                </li>
    
                        </ul>
                    
                    ))}
                </div>

                
            </Main> 
        )
    }
}