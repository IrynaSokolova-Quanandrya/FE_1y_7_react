import { Component } from "react";
import { GlobalStyle } from "Global.styled";
import TodoList from "./TodoList/TodoList";
import initialTodos from './TodoList/todos.json';
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { nanoid } from "nanoid";
/**
 * декілька форм та однаковий id
 * створюємо нову форму TodoEditor
 * додаємо нові завдання в стейт не мутуючи масиву
 * видаляємо завдання не мутуючи масиву
 * 
 * radio
 * чекбокси
 */
export class App extends Component {
  
  state={
    todos: initialTodos,
  }
 
  addTodo = (text)=>{
    const newTodo = {
      id: nanoid(),
      text,
      completed: false
    }
    
  this.setState((prevState)=>{
    return {
      todos: [newTodo, ...prevState.todos]
    }
  })
  }

  render(){
    return (
      <>
      <TodoEditor addTodo={this.addTodo}/>
      <TodoList todos={this.state.todos}/>
      <GlobalStyle/>
      </>
    );
  }
};
