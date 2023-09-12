import React from 'react';
import {List, Item, Text, Button} from './TodoList.styled';

const TodoList = ({ todos }) => (
  <List>
    {todos.map(({ id, text }) => (
      <Item key={id}>
        <Text>{text}</Text>
        <Button>Delete</Button>
      </Item>
    ))}
  </List>
);

export default TodoList;