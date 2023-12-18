import { useLoaderData, useNavigate, NavLink, useSearchParams} from "react-router-dom";

export  function BookList() {
    const books = useLoaderData();
    const goBack = useNavigate();
    
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('title') ?? '';

    const visibleBooks = books.filter(({title})=>title.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()))
    
    const updateQueryString = (title) =>{
        const nextParams = title !== "" ? { title} : {};
        setSearchParams(nextParams)
    } 
   
    return (
        <div>
            <input type="text" value={searchParam} onChange={(e)=>updateQueryString(e.target.value)} />
            <button type='button' onClick={()=>goBack(-1)}>Go back</button>
             <h1>BookList</h1>
                <ul className="bookList">
                {visibleBooks.map(({id, title, author})=>(
                    <li key={id}> 
                    <NavLink to={`/books/${id}`}>{id} - {title} - {author}</NavLink>
                    </li>
                ))}
                </ul>
        </div>
    )
}

  