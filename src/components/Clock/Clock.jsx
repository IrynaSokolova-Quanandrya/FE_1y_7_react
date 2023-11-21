import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';


export const Clock = ()=>{
  const [time, setTime] = useState(()=>new Date())
  const intervalId = useRef(null)
  const inputRef = useRef(null)


  console.log(inputRef.current);
const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(inputRef.current.value);
}
useEffect(() => {
  intervalId.current = setInterval(() => {     
    setTime(new Date());
  }, 1000);


  return ()=>{
    stop();
  }

}, [time])

const stop = () => {
  clearInterval(intervalId.current);
};


  return (
    <div className={styles.container}>
      {/* <p className={styles.clockface}>
        Поточний час: {time.toLocaleTimeString()}
      </p> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={inputRef}/>
        <button type="submit">Send</button>
      </form>
      {/* <button type="button" onClick={stop}>
        Зупитини
      </button> */}
    </div>
  );
}


