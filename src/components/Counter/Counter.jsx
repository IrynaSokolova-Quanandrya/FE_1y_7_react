import {Component}from 'react';
import { Buttons } from './Buttons';
import './Counter.css';
import { CounterValue } from './CounterValue';
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
  };
 * static propTypes = {
    //
  };+
 * підняття стану
 * **/

export class Counter extends Component{  

  static defaultProps = {
    initialValue: 1,
  };

  state = {
    value: 0
  }

  handlerIncrement = () => {     
    // 1. Зміна стану при умові перезаписати значення
    // this.setState({
    //   value: 124
    // })
   
    // 2. Зміна стану від попереднього значення
    this.setState((prevState)=>{
      return {
        value: prevState.value + 1
      }
    })
  }

  handlerDecrement = () => {
    this.setState((prevState)=>{
      return {
        value: prevState.value - 1
      }
    })
  }

  render(){
    const {handlerDecrement, handlerIncrement} = this;
    return(
          <div className="Counter__controls">
          <CounterValue value={this.state.value}/>
          <Buttons 
            onDecrement={handlerDecrement}
            onIncrement={handlerIncrement}/>
        </div>
        )
  }
}


