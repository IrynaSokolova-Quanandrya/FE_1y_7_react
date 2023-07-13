import defaultImg from "default.jpg";
export const GalleryItem=({
    itemUrl = defaultImg, 
    title, 
    author, 
    price, 
    quantity,
    tag
})=>{
    console.log(author);
    return(
        <>
            <img src={itemUrl} alt="" width="480" />
            <h2>{title}</h2>
            <p>Автор: <a href={author}>{tag}</a></p>
            <p>Ціна: {price} грн</p>
            <p>Доступність: {quantity} закінчується чи є в наявності</p>
            <button type="button">Додати в кошик</button>
        </>
    )
}