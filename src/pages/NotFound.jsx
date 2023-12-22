import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <>
            <h1>NotFound</h1>
            <button type="button" onClick={()=>navigate('/books')}>Повернутися на головну</button>
        </>
    )
}