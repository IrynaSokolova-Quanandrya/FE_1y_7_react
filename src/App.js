// import {SignupForm} from './components/SignupForm/SignupForm';
// import {Counter} from './components/Counter/Counter';
import { Friends } from 'components/Friends/Friends';
// import { createContext } from 'react';
// import { ComponentA } from 'components/ComponentA';
// import {Clock} from './components/Clock/Clock';
// import {PokemonView} from './views/PokemonView';

/**
 * 
 * useReduser в компоненті Counter (пілимо з нуля, щоб не забули)
 * 
 */

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

// export const Color = createContext(null)

export default function App() {
  return (
    <div style={containerStyles}>
    {/* <Color.Provider value='red'>
      <ComponentA/>
    </Color.Provider> */}
          {/* <SignupForm />         */}
          {/* <Counter />         */}
          {/* <Clock />     */}
          {/* <PokemonView />        */}
          <Friends/>
    </div>
  );
}
