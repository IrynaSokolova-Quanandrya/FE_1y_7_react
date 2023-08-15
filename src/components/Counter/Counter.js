import React from 'react';
import './Counter.css';
/**
 * класовий компонент
 * настідування
 * події
 * синтетичний івент
 * як зберегти значення event.target
 * event один на всіх, бо глобальне делегування
 * інлайнові методи
 * контекст
 * конструктор
 * мінімізований синтаксис з коробки реакту
 * стан
 * зміна стану (перезапис, від початкового стану)
 * static defaultProps = {
    initialValue: 0,
  };
 * static propTypes = {
    //
  };
 * підняття стану
 * **/

export function Counter(){
  return(
    <div className="Counter__controls">
      <span className="Counter__value">0</span>
    <button type="button">
      Збільшити на 1
    </button>
    <button type="button">
      Зменшити на 1
    </button>
  </div>
  )
} 
