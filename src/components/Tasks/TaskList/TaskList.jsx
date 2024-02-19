import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../../../redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../../redux/operations";
import {useGetTasksQuery} from '../../../redux/taskAPI'


export const TaskList = () => {
  const dispatch = useDispatch()
  // const tasks = useSelector(selectVisibleTasks)
  const {data: tasks, isFetching, isError, isSuccess} = useGetTasksQuery()
  
 

   useEffect(()=>{
    dispatch(fetchTasks())
   },[dispatch])


  return (
    <>
      {isFetching && <p>Loading...</p>}
     { isSuccess && tasks &&
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
        </ul>}
      {isError && <p>Oops!</p>}
    </>
  );
};
