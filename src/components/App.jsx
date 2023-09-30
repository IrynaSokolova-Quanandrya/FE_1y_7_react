import { Component } from "react";
import { GlobalStyle } from "Global.styled";
import PokemonForm from "./Pokemon/PokemonForm";
import { PokemonInfo } from "./Pokemon/PokemonInfo";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  
  state= {
    pokemon: null,
  }

 getPokemonName=(name)=>{
  this.setState({pokemon: name})
 }

  render(){
    return (
      <>
      <PokemonForm onSubmit={this.getPokemonName}/>
      <PokemonInfo name={this.state.pokemon}/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
      />
      <GlobalStyle/>
      </>
    );
  }
};
