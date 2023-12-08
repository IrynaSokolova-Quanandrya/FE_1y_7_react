import { useOutletContext } from "react-router-dom";

export const Author = () => {
   const aboutAuthor =  useOutletContext();
    return <h1>{aboutAuthor}</h1>
}