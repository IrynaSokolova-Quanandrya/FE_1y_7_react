// import { GlobalStyle } from "Global.styled";
import { Outlet } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Container} from "Global.styled";

// useParams
// useLoaderData
// useNavigate
//useRoutError

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
