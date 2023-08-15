import {Component}from 'react';
import './Counter.css';
/**
 * класовий компонент+
 * настідування+
 * події+
 * синтетичний івент?
 * як зберегти значення event.target+
 * event один на всіх, бо глобальне делегування+
 * інлайнові методи+
 * контекст+
 * конструктор+
 * мінімізований синтаксис з коробки реакту+
 * стан+
 * зміна стану (перезапис, від початкового стану)
 * static defaultProps = {
    initialValue: 0,
  };+
 * static propTypes = {
    //
  };+
 * підняття стану
 * **/

export class Counter extends Component{  
  // static defaultProps = {
  //   value: 0,
  // };

// static propType = {
//   value: propType.string.isRequired
// }
  state = {
    value: 10,
  }

  handlerDecrement = (e) => {
    console.log("Збільшуємо на 1");    
  }

  handlerIncrement = (e) => {
    console.log("Зменшуємо на 2");
  }

  render(){
    const {handlerDecrement, handlerIncrement} = this;
    return(
          <div className="Counter__controls">
            <span className="Counter__value">{this.state.value}</span>
          <button type="button" onClick={handlerDecrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={handlerIncrement}>
            Зменшити на 1
          </button>
        </div>
        )
  }
}

// export function Counter(){
//   return(
//     <div className="Counter__controls">
//       <span className="Counter__value">0</span>
//     <button type="button">
//       Збільшити на 1
//     </button>
//     <button type="button">
//       Зменшити на 1
//     </button>
//   </div>
//   )
// } 
