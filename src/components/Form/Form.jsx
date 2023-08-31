import { Component } from "react";

export class Form extends Component{
    state = {
        name: '',
        tag: ''
      }

      handelInput = (e)=>{
        const {name, value} = e.currentTarget;
    
        this.setState({
          [name]: value
        })
      } 

      handelSubmit = (e)=>{
        e.preventDefault();
        this.props.onChange(this.state);
        this.reset();
      }

      reset = ()=>{
        this.setState({
            name: '',
            tag: ''
        })
      }
    render(){
        return(
            <form onSubmit={this.handelSubmit}>
        <label htmlFor="name">
          Name
          <input id='name' type="text" name='name' value={this.state.name} onChange={this.handelInput}/>
        </label>
        <label htmlFor="tag">
          Tag
          <input id='tag' type="text" name='tag' value={this.state.tag} onChange={this.handelInput}/>
        </label>
        <button type="submit">Submit</button>
      </form>
        )
    }
}