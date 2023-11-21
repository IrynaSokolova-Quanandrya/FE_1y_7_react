import { useContext, memo } from "react";
import { Color } from "App";

export const Button = ()=>{
    const bgColor = useContext(Color)
    console.log(bgColor);
    return(
        <button type="submit" style={{backgroundColor: bgColor}}>Кнопка useContext</button>
    )
}
// export const MemoizedButton = memo(Button, arePropsEqual?)