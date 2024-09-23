import { saveAuthTokens, setAuthHeaders } from "@/utils/auth";
import axios, { AxiosError, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(setAuthHeaders, (error) =>
  Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const newTokens = {
      "access-token": response.headers["access-token"],
      client: response.headers["client"],
      uid: response.headers["uid"],
    };
    if (newTokens["access-token"] && newTokens["client"] && newTokens["uid"]) {
      saveAuthTokens(newTokens);
    }

    return response;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default apiClient;
