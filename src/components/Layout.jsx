import { Outlet } from "react-router-dom";
import { Navigation } from "./AppNav";
import { Container, Header } from "Global.styled";

export function Layout() {
    return (
        <Container>   
                <Navigation/>  
            
            <Outlet></Outlet>
        </Container>
    )
}