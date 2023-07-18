import { GalleryItem } from "components/GalleryItem/GalleryItem"

export function GalleryList({items}) {
    return (
        <ul>
            {/* {[1,2,3].map((el)=><div>{el}</div>)} */}
            {items.map((item)=>{
            return (
            <li key={item.id}>
                <GalleryItem 
                itemUrl={item.url}
                title={item.title}
                author={item.author.url}
                price={item.price}
                quantity={item.quantity}
                tag={item.author.tag}
            />
            </li>)
            })}
        </ul>
    )
}