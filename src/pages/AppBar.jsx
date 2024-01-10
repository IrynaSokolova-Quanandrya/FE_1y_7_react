import { UserMenu } from "components/UserMenu"
import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"

export const AppBar =()=>{
    const isLoggedIn = useSelector(({user})=> user.isLoggedIn)
    console.log(isLoggedIn);
    return(
        <>
        <header>
        <nav>
            <NavLink to='/login'> Log In</NavLink>
            <hr />
            
        </nav>
       {isLoggedIn&&<UserMenu/>}
        </header>
         <Outlet/>
       
        </>
    )
}