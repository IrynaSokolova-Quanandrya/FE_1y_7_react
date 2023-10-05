import { Component } from "react";
import {Dna} from 'react-loader-spinner';
/**
 * Введіть ім'я покемона
 * Завантажуємо...
 * Покемона з _ім'я покемона не знайдено
 * Покемона {this.props.name} не знайдено
 * 'idle'
 * 'pending'
 * 'resolved'
 * 'rejected'
 */
export class PokemonInfo extends Component{

    state={
        pokemon: null,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name){
          this.setState({status: 'pending'})
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(response=>{
          if(response.ok === true){
             return response.json()
          }
         return Promise.reject(new Error(`Покемона ${this.props.name} не знайдено`))
        })        
        .then(pokemon => this.setState({pokemon, status: 'resolved'}))
        .catch((error)=> {this.setState({error, status: 'rejected'})})
        }
        
    }
    
    render(){
      const {pokemon, error, status} = this.state

      switch (status) {
        case 'idle':
          return <p>Введіть ім'я покемона</p>;

        case 'pending':
          return <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />;

        case 'resolved':
          return <div>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            width="240"
            height="100"
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
          <ul>
            {pokemon.stats.map(entry => (
              <li key={entry.stat.name}>
                {entry.stat.name}: {entry.base_stat}
              </li>
            ))}
          </ul>
        </div>
          
          case 'rejected':
          return <p>{error.message}</p>
             
        default:
          return;
      }

    }
}