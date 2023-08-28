// import {Counter} from 'components/Counter/Counter';
import { GlobalStyle } from './Global.styled';
// import { Dropdown } from 'components/Dropdown/Dropdown';
// import { ColorPicker } from 'components/ColorPicker/Colorpicker';
import TodoList from 'components/TodoList/TodoList';
import initialTodos from './todos';
import { Component } from 'react';
// const colorPickerOptions = [
//         { label: 'red', color: '#F44336' },
//         { label: 'green', color: '#4CAF50' },
//         { label: 'blue', color: '#2196F3' },
//         { label: 'grey', color: '#607D8B' },
//         { label: 'pink', color: '#E91E63' },
//         { label: 'indigo', color: '#3F51B5' },
//       ];


export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render(){

    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    ); 

    return (
      <>    
      <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      {/* <ColorPicker options={colorPickerOptions}/> */}
      {/* <Dropdown/> */}
        {/* <Counter  initialValue= {0}/> */}
        <GlobalStyle />
      </>
    )
  }
}
























      