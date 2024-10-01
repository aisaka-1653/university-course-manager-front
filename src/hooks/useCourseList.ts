import apiClient from "@/apis/apiClient";
import useSWR from "swr";

export type Course = {
  id: number;
  name: string;
  description: string;
};

export const useCourseList = (season: string) => {
  const fetcher = async (url: string) => {
    return apiClient.get(url).then((res) => res.data);
  };

  const { data, error, isLoading } = useSWR<Array<Course>>(
    `/courses?season=${season}`,
    fetcher
  );

  return {
    courses: data,
    isLoading,
    isError: error,
  };
};
