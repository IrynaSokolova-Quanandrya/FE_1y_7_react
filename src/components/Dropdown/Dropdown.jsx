import { Component } from 'react';
import './Dropdown.css';

/**
 * створюємо випадаюче меню 
 * спочатку з двома методами та кнопкапи показати та сховати
 * потім від попереднього значення (оптамізуємо код)
 * робимо рендер надпису кнопки в залежності від значення стейту
 */

export class Dropdown extends Component {
  state = {
    visible: false
  }

  toggle = () => {
    this.setState((prevState)=>{
      return {
        visible: !prevState.visible
      }
    })
  }
     render(){
      return (
        <div className="Dropdown">
          <button
            type="button"
            className="Dropdown__toggle"
            onClick = {this.toggle}
          >
          Open
          </button>
          
          {this.state.visible && <div 
                                    className="Dropdown__menu">
                                    Випадаюче меню
                                  </div>}
        </div>
      );
     }
    }
  


