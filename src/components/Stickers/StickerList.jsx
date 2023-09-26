import { Sticker } from "./Sticker"

export function StickerList({stickers, onGetLabel}) {
    return(
        <ul>
            {stickers.map(({img, label})=>{
            return(
            <li key={label}>
                <Sticker 
                    onGetLabel={onGetLabel} 
                    img={img} 
                    label={label}/>
                </li>
                )})}
        </ul>
        
    )
}