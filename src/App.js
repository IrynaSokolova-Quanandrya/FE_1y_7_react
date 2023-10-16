// import {SignupForm} from './components/SignupForm/SignupForm';
// import {Counter} from './components/Counter/Counter';
import { Friends } from 'components/Friends/Friends';
import {Clock} from './components/Clock/Clock';
// import {PokemonView} from './views/PokemonView';

/**
 * useRef - Clock, 
 * як виклик в апдейт але один раз, 
 * як значення value при сабміті форми
 * useReduser в компоненті Counter (пілимо з нуля, щоб не забули)
 * useMemo фільтр друзів
 */

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
          {/* <SignupForm />         */}
          {/* <Counter />         */}
          {/* <Clock />         */}
          {/* <PokemonView />        */}
          <Friends/>
    </div>
  );
}
