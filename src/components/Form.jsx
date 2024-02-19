import { useDispatch } from "react-redux"
import { logIn } from "../redux/authSlice";
import { useNavigate } from "react-router";

export const LogInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.currentTarget
        dispatch(logIn(form.elements.name.value))
        navigate('/dashboard')
        form.reset()
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <br />
        <button type="submit">Зареєструватися</button>
    </form>
    )
}