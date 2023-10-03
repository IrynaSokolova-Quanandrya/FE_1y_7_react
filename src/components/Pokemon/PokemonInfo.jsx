import { Component } from "react";
/**
 * Введіть ім'я покемона
 * Завантажуємо...
 * Покемона з _ім'я покемона не знайдено
 * 
 * 'idle'
 * 'pending'
 * 'resolved'
 * 'rejected'
 */
export class PokemonInfo extends Component{

    state={
        pokemon: null
    }

    componentDidUpdate(prevProps){
        if(prevProps.name !== this.props.name){
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(response=>response.json())
        .then(pokemon => this.setState({pokemon}))
        }
        
    }
    
    render(){
      const {pokemon} = this.state
        return(
          <>
            {pokemon && <div>
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
    </div>}
    </>
        )
    }
}