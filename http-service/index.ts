import { AxiosRequestConfig } from "axios";
import {
  UseMutationOptions,
  UseQueryOptions,
  useQuery,
  useMutation,
  QueryKey,
} from "@tanstack/react-query";
import useAxiosAuth from "../hooks/use-axios-auth";

type ApiGetCallProps<TData = any, TError = any> = {
  endpoint: string;
  config?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">;
  queryKey: QueryKey;
  axiosConfig?: AxiosRequestConfig;
};

export function useApiGet<TData = any, TError = any>({
  endpoint,
  config = {},
  queryKey,
  axiosConfig = {},
}: ApiGetCallProps<TData, TError>) {
  const axiosAuth = useAxiosAuth();

  return useQuery<TData, TError>({
    ...config,
    queryKey,
    queryFn: () =>
      axiosAuth.get(endpoint, axiosConfig).then((response) => response.data),
  });
}

type ApiMutationCallProps<TData = any, TError = any, TVariables = any> = {
  endpoint: string;
  method: "post" | "put" | "delete" | "patch";
  config?: Omit<UseMutationOptions<TData, TError, TVariables>, "mutationFn">;
  axiosConfig?: AxiosRequestConfig;
};

export function useApiMutation<TData = any, TError = any, TVariables = any>({
  endpoint,
  method,
  config = {},
  axiosConfig = {},
}: ApiMutationCallProps<TData, TError, TVariables>) {
  const axiosAuth = useAxiosAuth();

  return useMutation<TData, TError, TVariables>({
    ...config,
    mutationFn: (data: TVariables) =>
      axiosAuth[method]<TData>(endpoint, data, axiosConfig).then(
        (response) => response.data
      ),
  });
}
