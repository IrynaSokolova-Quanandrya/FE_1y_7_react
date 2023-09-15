import { Component } from "react";
import { GlobalStyle } from "Global.styled";
import TodoList from "./TodoList/TodoList";
import initialTodos from './TodoList/todos.json';
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Filter } from "./Filter/Filter";
import { InfoBox } from "./App.styled";
import { nanoid } from "nanoid";
/**
 * життєвий цикл
 * фаза монтування componentDidMount
 * фаза оновлення componentDidUpdate
 * додавання завдать в lockalStorage: 
   приклад з фільтром коли стейт не оновлюється 
   і з видаленням/додаванням завдань
 * як зациклити компонент
 * як взяти тудушки з локального сховища
 * перевірка на null
 * модальне вікно 
 * стейт функціоналу модального вікна зберігаємо
    в тому компоненті в якому його використовуємо
 * this.prop.children
 * z-index і div.#modal-root
 * createPortal
 * слухач на window keуdown
 * прибираємо після себе
   фаза демонтування componentWillUnmount
 * закриття по бекдропу
 * оптимізація з методом shouldComponentUpdate
 */
export class App extends Component {
  
  state={
    todos: [],
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

  deleteTodo = todoId => {
    this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
};

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

  componentDidMount(){
    console.log('Виклик componentDidMount');

    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    
    if(parsedTodos){
      this.setState({
        todos: parsedTodos
      })
    }
}

componentDidUpdate(prevProps, prevState){
  const {todos} = this.state

  if(prevState.todos !== todos){
    localStorage.setItem('todos', JSON.stringify(todos))
  }  

}

render(){
    console.log('Виклик render');
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
