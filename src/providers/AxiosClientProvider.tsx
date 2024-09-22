import { removeAuthTokens, saveAuthTokens, setAuthHeaders } from "@/utils/auth";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";
import { FC, ReactElement, useEffect, useState } from "react";
import apiClient from "@/apis/apiClient";
import { useNavigate } from "react-router-dom";

type AxiosClientProviderProps = {
  children: ReactElement;
};

export const AxiosClientProvider: FC<AxiosClientProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [isInterceptorSet, setIsInterceptorSet] = useState(false);

  useEffect(() => {
    const requestInterceptors = apiClient.interceptors.request.use(
      setAuthHeaders,
      (error) => Promise.reject(error)
    );

    const responseInterceptors = apiClient.interceptors.response.use(
      (response: AxiosResponse) => {
        const newTokens = {
          "access-token": response.headers["access-token"],
          client: response.headers["client"],
          uid: response.headers["uid"],
        };
        if (
          newTokens["access-token"] &&
          newTokens["client"] &&
          newTokens["uid"]
        ) {
          saveAuthTokens(newTokens);
        }
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          const status = error.response.status;

          switch (status) {
            case 401:
              toast.error("認証エラーが発生しました｡再度ログインしてください｡");
              removeAuthTokens();
              navigate("/users/login");
              break;
            default:
              toast.error("予期せぬエラーが発生しました");
          }
          Promise.reject(error);
        }
      }
    );

    setIsInterceptorSet(true);

    return () => {
      apiClient.interceptors.request.eject(requestInterceptors);
      apiClient.interceptors.response.eject(responseInterceptors);
    };
  }, []);

  if (!isInterceptorSet) {
    return null;
  }

  return <>{children}</>;
};
