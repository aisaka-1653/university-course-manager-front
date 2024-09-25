import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header";
import { NavigationBar } from "../organisms/NavigationBar";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Outlet />
    </div>
  );
};
