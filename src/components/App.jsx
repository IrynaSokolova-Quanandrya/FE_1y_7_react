import { Component } from "react"
import { Form } from "./Form/Form";
/**
 * декілька форм та однаковий id
 * radio
 * чекбокси та мутація
 */
export class App extends Component {
  state={
    formData: null
  }
  getFormData = (data)=>{
    this.setState({formData: data})
  }

  render(){
    return (
      <Form onChange={this.getFormData}/>
      
    );
  }
};
