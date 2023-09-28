import { Component } from "react";
import { GlobalStyle } from "Global.styled";

export class App extends Component {
  
  state= {
    pokemon: null,
    loading: false
  }

 componentDidMount(){
  this.setState({loading: true})
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response=>response.json())
  .then(pokemon=>this.setState({pokemon}))
  .finally(()=>this.setState({loading: false}))
 }

  render(){
    return (
      <>
      {this.state.loading && <p>Завантажуємо...</p>}
      {this.state.pokemon && <p>Отримали покемона</p>}
      <GlobalStyle/>
      </>
    );
  }
};
