import { BookList } from "components/pages/BookList";
import { Home } from "components/pages/Home";
import { Layout } from "components/Layout";
import { NotFound } from "components/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { fetchBooks, fetchBooksById } from "service/fetchBooks";
import { Book } from "components/pages/Book";
/**
 * createBrowserRouter
 * path
 * element
 * errorElement
 * children
 * index
 */
export const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
        {
            element: <Home/>,
            index: true,
        },
        {
            path: '/books',
            element: <BookList/>,
            loader: fetchBooks,

        },
        {
            path: '/books/:bookId',
            element: <Book/>,
            loader: fetchBooksById,

        }
    ]
   }
])
