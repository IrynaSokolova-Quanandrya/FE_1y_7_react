// import { GlobalStyle } from "Global.styled";
import { Outlet } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Container} from "Global.styled";

/**
 * useNavigate та автоматичне повернення додому
 * ліниве завантаження компонентів
 * useLocation та об'єкт місцезнаходження
 * useOutletContext 
 */

export const App = () => {
  return(
    <>
        <Container>   
          <Navigation/>
          <Outlet/>
          <footer>footer</footer>
        </Container>
        {/* <GlobalStyle/> */}
    </>
  )
 };
