import { App } from "components/App";
import { Author } from "components/Author";
import { Book } from "pages/Book";
import { BookList } from "pages/BookList";
import { Home } from "pages/Home";
import { NotFound } from "pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
import { fetchBooks, fetchBooksById } from "service/fetchBooks";

/**
 * передача другу посилання на конкретну книгу 
 * робимо вкладені маршрути як елементи поточної сторінки
 * useNavigate для імітації логінізації
 * useLocation для передачі стейту попередньої локації
 */

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
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
                children: [
                    {
                        path: '/books/:bookId/author',
                        element: <Author/>
                    }
                ]
            }
            ]      
    }
])
