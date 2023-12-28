import { Layout } from "./Tasks/Layout/Layout";
import { AppBar } from "./Tasks/AppBar/AppBar";
import { TaskForm } from "./Tasks/TaskForm/TaskForm";
import { TaskList } from "./Tasks/TaskList/TaskList";
import { useSelector } from "react-redux";

export const App = () => {
  // const tasks = useSelector((state)=>state.tasks[1]);
  // console.log(tasks);
  return (    
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
