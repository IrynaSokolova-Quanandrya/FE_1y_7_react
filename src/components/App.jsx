import { GlobalStyle } from "Global.styled";
import { Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
// useParams
// useLoaderData
// useNavigate

export const App = () => {
  return(
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<BookList/>}/>
        </Routes>
        <GlobalStyle/>
    </>
  )
 };
