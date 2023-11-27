import { NavLink, useLoaderData, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBooks } from "service/fetchBooks";

export function BookList() {
    // const [books, setBooks] = useState(null)
    const books = useLoaderData();
    const goBack = useNavigate();
    // useEffect(() => {
    //   fetchBooks().then(books=>{
    //     if(books){
    //     setBooks(books)
    //   }})      
    // }, [])
    
    return (
        <>
        {console.log(books)}
        <button type='button 'onClick={()=>goBack(-1)}>Go back</button>
        <h1>BookList</h1>
        {books && <ul className="bookList">
           {books.map(({id, title, author})=>(
            <li key={id}> 
              <NavLink to={`/books/${id}`}>{id} - {title} - {author}</NavLink>
            </li>
           ))}
        </ul>}        
        </>
    )
}