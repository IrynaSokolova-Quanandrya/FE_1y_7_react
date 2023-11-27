import { useParams, useLoaderData } from "react-router-dom"

export function Book() {
    const {bookId} = useParams();
    const {title, author, description, rating, image} = useLoaderData();
    return (
        <div className="thumb">
        <img src={image} alt="" />
        <h2>Book {bookId}</h2>
        <h1>{title} - {author}</h1>
        <p>{description}</p>
        <p>{rating}</p>
        </div>
    )
}