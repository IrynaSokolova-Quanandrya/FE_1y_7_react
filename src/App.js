// import {SignupForm} from './components/SignupForm/SignupForm';
// import {Counter} from './components/Counter/Counter';
// import {Clock} from './components/Clock/Clock';
import {PokemonView} from './views/PokemonView';

/**
 * useEffect як componentWillUnmount - Clock
 * useRef - Clock
 * пропуск першого рендеру - pokemon
 * useReduser в компоненті Counter (пілимо з нуля, щоб не забули)
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
          <PokemonView />       
    </div>
  );
}
