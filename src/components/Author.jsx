import { useOutletContext } from "react-router-dom";
const Author = () => {
    const aboutAuthor = useOutletContext();
    return <h1>{aboutAuthor}</h1>
}
export default Author;