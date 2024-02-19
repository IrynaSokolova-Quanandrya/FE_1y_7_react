import { LogInForm } from "components/Form"
import { useSelector } from "react-redux"

export const LoginPage = ()=>{
    const isLoggedIn = useSelector(state=> state.isLoggedIn)
    return (
        <>{!isLoggedIn && <LogInForm/>}
        </>
        
    )
}