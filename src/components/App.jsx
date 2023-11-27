// import { GlobalStyle } from "Global.styled";
import { Outlet } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Container} from "Global.styled";

// useParams
// useLoaderData
// useNavigate

export const App = () => {
  return(
    <>
        <Container>   
                <Navigation/>              
            <Outlet></Outlet>
        </Container>
        {/* <GlobalStyle/> */}
    </>
  )
 };
