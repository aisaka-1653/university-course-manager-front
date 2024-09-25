import { CourseList } from "@/components/pages/CourseList";
import { CouseRegistration } from "@/components/pages/CouseRegistration";
import { Home } from "@/components/pages/Home";
import { Login } from "@/components/pages/Login";
import { ResetPassword } from "@/components/pages/ResetPassword";
import { AuthLayout } from "@/components/templates/AuthLayout";
import { MainLayout } from "@/components/templates/MainLayout";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="users/login" element={<Login />} />
        <Route path="password/reset" element={<ResetPassword />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="courses" element={<CourseList />} />
        <Route path="courses/registration" element={<CouseRegistration />} />
      </Route>
    </Routes>
  );
};
