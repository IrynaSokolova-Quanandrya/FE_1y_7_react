import React, {Component} from 'react';
import { List, Item, Text, Button } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Item key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <Text completed={completed}>{text}</Text>
        <Button
          type='button'
          onClick={() => onDeleteTodo(id)}
        >
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

class LoginForm extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const formFields = evt.currentTarget.elements;
    console.log(formFields);
  }; 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
 }
 

export default TodoList, LoginForm;