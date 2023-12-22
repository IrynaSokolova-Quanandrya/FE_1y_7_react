import { GlobalStyle } from "Global.styled";
import {Suspense } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Container} from "Global.styled";

const App = () => {
  return(
    <Suspense fallback={<div>Loader...</div>}>
        <Container>   
          <Navigation/>
          <Outlet/>
          <footer>footer</footer>
        </Container>
        <GlobalStyle/>
    </Suspense>
  )
 };

 export default App;