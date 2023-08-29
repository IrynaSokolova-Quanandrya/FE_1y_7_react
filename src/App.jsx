import { Component } from 'react';
import { GlobalStyle } from './Global.styled';
import { StickerList } from 'components/Stickers/StickerList';
import stickers from './components/Stickers/stickers.json';


export class App extends Component {
  state={
    stickerLabel: null
  }

  labelHandler = label => {
    this.setState({stickerLabel:label})
  }
  
  render(){
    const {stickerLabel} = this.state;
    return(
      <>
      {stickerLabel && <h1>{stickerLabel}</h1>}
      <StickerList stickers={stickers} onGetLabel={this.labelHandler}/>
      <GlobalStyle/>
      </>
    )
  }
}













// export class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };
//   render(){

//     const { todos } = this.state;

//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     ); 

//     return (
//       <>    
//       <div>
//           <p>Загальна кількість: {totalTodoCount}</p>
//           <p>Кількість виконаних: {completedTodoCount}</p>
//         </div>

//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       {/* <ColorPicker options={colorPickerOptions}/> */}
//       {/* <Dropdown/> */}
//         {/* <Counter  initialValue= {0}/> */}
//         <GlobalStyle />
//       </>
//     )
//   }
// }
























      