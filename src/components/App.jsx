import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./Tasks/TaskForm/TaskForm";
import { TaskList } from "./Tasks/TaskList/TaskList";

export const App = () => {
  return (    
    <Layout>
      <AppBar />
      <Outlet/>
    </Layout>
  );
};
