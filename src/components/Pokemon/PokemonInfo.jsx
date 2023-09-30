import { Component } from "react";

export class PokemonInfo extends Component{

    state={
        pokemon: null
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props.name){
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
        .then(response=>response.json())
        .then(pokemon => this.setState({pokemon}))
        }
        
    }
    
    render(){
        return(
            <div>
      {/* <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      /> */}
      {/* <h2>{name}</h2> */}
      <ul>
        {/* {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))} */}
      </ul>
    </div>
        )
    }
}