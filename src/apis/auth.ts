import { LoginFormSchema } from "@/schema/loginFormSchema";
import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

export const login = async (user: LoginFormSchema): Promise<AxiosResponse> => {
  return apiClient.post("/users/sign_in", user);
};

export const logout = async (): Promise<AxiosResponse> => {
  return apiClient.delete("/users/sign_out");
};

export const requestPasswordReset = async ({
  email,
}: {
  email: string;
}): Promise<AxiosResponse> => {
  return apiClient.post("/users/password", {
    email,
    redirect_url: import.meta.env.VITE_PASSWORD_RESET_REDIRECT_URL,
  });
};
