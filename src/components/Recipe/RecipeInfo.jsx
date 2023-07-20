export const RecipeInfo = ({text, icon: Icon})=>{
    return <li>
        <Icon size={40}/>
        <p>{text}</p>
    </li>
}