import { Login } from "@/components/pages/Login"
import { Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route path="users/login" element={<Login />} />
    </Routes>
  )
}
