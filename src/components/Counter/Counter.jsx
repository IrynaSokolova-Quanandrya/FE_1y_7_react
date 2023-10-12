import { useEffect, useState } from 'react';
import styles from './Counter.module.css';

export const Counter = ()=>{
const [counterA, setCounterA] = useState(0);
const [counterB, setCounterB] = useState(0);

const handleCounterAIncrement = () => {
  setCounterA(prevCounterA => prevCounterA + 1 );
};

const handleCounterBIncrement = () => {
  setCounterB(prevCounterB => prevCounterB + 1 );
};

useEffect(()=>{
  console.log('Виклик useEffect ' + Date.now());
   const totalClicks = counterA + counterB;
  document.title = `Всього клікнули ${totalClicks} разів`;
}, [counterA, counterB])

return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Клікнули counterA {counterA} разів
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Клікнули counterB {counterB} разів
      </button>
    </>
  );
}


// export class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Всього клікнули ${totalClicks} разів`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Всього клікнули ${totalClicks} разів`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Клікнули counterA {this.state.counterA} разів
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Клікнули counterB {this.state.counterB} разів
//         </button>
//       </>
//     );
//   }
// }
