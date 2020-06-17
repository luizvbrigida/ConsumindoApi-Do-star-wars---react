import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
   <aside className="menu-area">
       <nav className="menu">
          <Link to="/">
              <i className="fa fa-home"></i>  Início
          </Link>

          <Link to="/filmes">
              <i className="fa fa-film"></i>  Filmes
          </Link>

          <Link to="/personagens">
              <i className="fa fa-user-circle"></i>  Personagens
          </Link>

          <Link to="/naves">
              <i className="fa fa-fighter-jet"></i>  Naves
          </Link>

          <Link to="/planetas">
              <i className="fa fa-globe"></i>  Planetas
          </Link>

          <Link to="/especies">
              <i className="fa fa-users"></i>  Espécies
          </Link>

          <Link to="/veiculos">
              <i className="fa fa-car"></i>  Veículos
          </Link>
        

          



       </nav>
   </aside>



 
  
  


