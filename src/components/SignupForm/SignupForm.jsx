import {useState, useEffect} from 'react';
import styles from './SignupForm.module.css';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(JSON.parse(window.localStorage.getItem(key)) ?? defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
   
  return [state, setState]
}

export const SignupForm = ()=>{
  
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handlEmailChange = (e)=>{        
        setEmail(e.target.value)
  }
  const handlPasswordChange = (e)=>{        
    setPassword(e.target.value)
}
  return (
          <form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              <span>Пошта</span>
              <input
                type="email"
                name="email"
                onChange={handlEmailChange}
                value={email}
              />
            </label>
    
    <label className={styles.label}>
      <span>Пароль</span>
      <input
        type="password"
        name="password"
        onChange={handlPasswordChange}
        value={password}
      />
    </label>
    
            <button type="submit">Зареєструватися</button>
          </form>
        );
      }















// export class SignupForm extends Component {
 
//   state = {
//     email: '',
//     password: '',
//   };

  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({ [name]: value });
  // };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Пошта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зареєструватися</button>
//       </form>
//     );
//   }
// }
