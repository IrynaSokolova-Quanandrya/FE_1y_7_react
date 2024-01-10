import { App } from "components/App";
import { AppBar } from "pages/AppBar";
import { Dashboard } from "pages/Dashboard";
import { Layout } from "pages/Layout";
import { LoginPage } from "pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <AppBar/>,
                children:[
                    {
                        path: '/login',
                        element: <LoginPage/>
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard/>
                    },

                ]        }
    ]
    }
])