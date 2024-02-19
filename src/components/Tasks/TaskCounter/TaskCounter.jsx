import { selectCount } from "../../../redux/selectors";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  const tasks = useSelector(selectCount)

  

  return (
    <div>
      <p className={css.text}>Active:{tasks.active}</p>
      <p className={css.text}>Completed:{tasks.completed}</p>
    </div>
  );
};
