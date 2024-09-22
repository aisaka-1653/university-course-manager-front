import { LoginFormSchema } from "@/schema/loginFormSchema";
import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

export const login = async (user: LoginFormSchema): Promise<AxiosResponse> => {
  return apiClient.post("/users/sign_in", user);
};

export const logout = async (): Promise<AxiosResponse> => {
  return apiClient.delete("/users/sign_out");
};
