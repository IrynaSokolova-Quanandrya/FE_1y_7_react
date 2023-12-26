import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  
  const handleDelete = ()=> {}
  const handleToggle =()=>{}
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
