import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../redux/authSlice"
import { useNavigate } from "react-router"

export const UserMenu=  ()=> {
    const userName = useSelector(({user})=>user.userName)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = ()=>{
            dispatch(logOut())
        navigate('/login')
    }
return (
    <>
    <p>Hello, {userName}</p>
    <button type="button" onClick={handleClick}>Log Out</button>
    </>
)
}