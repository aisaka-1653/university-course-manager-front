import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { removeAuthTokens } from "@/utils/auth";
import { LoginFormSchema } from "@/schema/loginFormSchema";
import { login as userLogin, logout as userLogout } from "../apis/auth";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(
    async (user: LoginFormSchema) => {
      setIsLoading(true);
      try {
        await userLogin(user);
        toast.success("ログインしました");
        navigate("/home");
      } catch (error) {
        toast.error("ログインに失敗しました");
      } finally {
        setIsLoading(false);
      }
    },
    [navigate]
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await userLogout();
      removeAuthTokens();
      toast.success("ログアウトしました");
      navigate("/users/login");
    } catch (error) {
      toast.error("ログアウトに失敗しました");
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  return { login, logout, isLoading };
};
