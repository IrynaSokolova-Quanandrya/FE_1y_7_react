import { Component } from "react";
import { GlobalStyle } from "Global.styled";
import TodoList from "./TodoList/TodoList";
import initialTodos from './TodoList/todos.json';
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Filter } from "./Filter/Filter";
import { InfoBox } from "./App.styled";
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
    filter: '',
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

  toggleCompleted = todoId => {
      this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };
  render(){
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
      <InfoBox>
          <p>Вього завдань: {totalTodoCount}</p>
          <p>Виконано: {completedTodoCount}</p>
        </InfoBox>
      <TodoEditor addTodo={this.addTodo}/>

      <Filter value={filter} onChange={this.changeFilter} />

      <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      <GlobalStyle/>
      </>
    );
  }
};
