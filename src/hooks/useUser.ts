import apiClient from "@/apis/apiClient";
import useSWR from "swr";

type User = {
  full_name: string;
};

export const useUser = () => {
  const fetcher = async (url: string) => {
    return apiClient.get(url).then((res) => res.data);
  };

  const { data, error, isLoading } = useSWR<User>(`/user/sessions`, fetcher);

  return {
    currentUser: data,
    isLoading,
    isError: error,
  };
};
