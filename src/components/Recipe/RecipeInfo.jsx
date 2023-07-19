export const RecipeInfo = ({text, icon: Icon})=>{
    return <li>
        <Icon size={30}/>
        <p>{text}</p>
    </li>
}