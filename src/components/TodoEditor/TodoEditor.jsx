import { Component } from "react";

export class TodoEditor extends Component{
    state={
        textValue: '',
        level: 'junior',
        licence: 'false'
    }

    handleChange = (e)=> {
        this.setState({textValue: e.target.value})
    }

    handleRadioChange = (e)=> {
        this.setState({level: e.target.name})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.textValue)
    }

    handleChecked = (e)=>{
        this.setState({
            licence: e.currentTarget.checked
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Напишіть свою задачу                    
                    <textarea value={this.state.textValue} onChange={this.handleChange}/>                    
                </label>
                <button type="submit">Create</button>
            <h2>Level</h2>
            <label>
                <input 
                    type="radio" 
                    name="junior" 
                    checked={this.state.level === 'junior'} 
                    onChange={this.handleRadioChange}/>  
                junior  
            </label>
            <label>
                <input 
                    type="radio" 
                    name="middle" 
                    checked={this.state.level === 'middle'} 
                    onChange={this.handleRadioChange}/> 
                middle   
            </label>
            <label>
                <input 
                    type="radio" 
                    name="senior" 
                    checked={this.state.level === 'senior'} 
                    onChange={this.handleRadioChange}/>   
                senior 
            </label>  

            <label>
                <input 
                    type="checkbox" 
                    name="licence" 
                    checked={this.state.licence}
                    onChange={this.handleChecked}/>
                Погоджуюсь з умовами договору
            </label>  
            </form>
        )
    }
}