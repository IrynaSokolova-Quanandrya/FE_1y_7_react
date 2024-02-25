import { App } from "components/App";
import { Home, Login, Register, Tasks } from 'pages';
import { createBrowserRouter } from "react-router-dom"

export const tasksRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/tasks',
        element: <Tasks/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
    ]
    }
])

