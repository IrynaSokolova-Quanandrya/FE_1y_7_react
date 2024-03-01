import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { AppBar } from "./AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return (    
    <Layout>
      <AppBar />
      <Outlet/>
    </Layout>
  );
};
