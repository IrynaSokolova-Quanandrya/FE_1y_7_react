import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../../redux/tasks/operations";


export const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(selectVisibleTasks) 

   useEffect(()=>{
    dispatch(fetchTasks())
   },[dispatch])

  return (
    <>     
     {tasks &&
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
        </ul>}
    </>
  );
};
