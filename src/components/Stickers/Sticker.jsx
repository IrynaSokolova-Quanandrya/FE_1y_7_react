export function Sticker({img, label, onGetLabel}) {
    return (
        <div onClick={()=>{onGetLabel(label)}}>
            <img src={img} alt={label} />
            <p>{label}</p>
        </div>
    )
}