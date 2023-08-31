import { Component } from "react"
import { Form } from "./Form/Form";

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
