import apiClient from "@/apis/apiClient";
import useSWR from "swr";

export const useUser = () => {
  const fetcher = async (url: string) => {
    return apiClient.get(url).then((res) => res.data);
  };

  const { data, error, isLoading } = useSWR(`/user/sessions`, fetcher);

  return {
    currentUser: data,
    isLoading,
    isError: error,
  };
};
