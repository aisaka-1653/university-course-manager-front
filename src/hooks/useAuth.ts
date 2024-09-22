import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useUserStore } from "@/stores/userStore";
import { removeAuthTokens } from "@/utils/auth";
import { LoginFormSchema } from "@/schema/loginFormSchema";
import { login as userLogin, logout as userLogout } from "../apis/auth";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const removeUser = useUserStore((state) => state.removeUser);

  const login = useCallback(
    async (user: LoginFormSchema) => {
      setIsLoading(true);
      try {
        const res = await userLogin(user);
        setUser(res.data.data);
        toast.success("ログインしました");
        navigate("/home");
      } catch (error) {
        toast.error("ログインに失敗しました");
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, setUser]
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await userLogout();
      removeUser();
      removeAuthTokens();
      toast.success("ログアウトしました");
      navigate("/users/login");
    } catch (error) {
      toast.error("ログアウトに失敗しました");
    } finally {
      setIsLoading(false);
    }
  }, [navigate, removeUser]);

  return { login, logout, isLoading };
};
