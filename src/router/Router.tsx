import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="users/login" element={<Login />} />
      </Route>
      <Route path="home" element={<Home />} />
    </Routes>
  );
};
