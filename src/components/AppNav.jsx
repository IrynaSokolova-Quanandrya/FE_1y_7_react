import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    // className={({isPending})=>isPending ? 'loader' : null} 
                    to='/books'>Books</NavLink>
                </li>
            </ul>
        </nav>
    )
}














// export function Navigation() {
//     return (
//         <nav>
//            <ul className="navList">
//            <li>
//                 <NavLink  className={({ isActive, isPending }) =>
//                         isPending ? "pending" : isActive ? "active" : ""
//                     } to="/">Home</NavLink>
//             </li>
//             <li>
//                 <NavLink className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         } to="/books">Books</NavLink>
//             </li>
//            </ul>
//         </nav>
//     )
// }