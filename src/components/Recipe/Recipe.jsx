import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';

export function Recipe ({name, time, servings, calories, image}){
    return <div>
        <h2>{name}</h2>
        <img src={image} alt="" width="450" />
        <ul>
            <RecipeInfo 
                text={`${time} min`} 
                icon={BsAlarm}/>
            <RecipeInfo 
                text={`${servings} servings`} 
                icon={HiOutlineChartPie}/>
            <RecipeInfo 
                text={`${calories} calories`} 
                icon={HiOutlineChartBar}/>
        </ul>
    </div>
}