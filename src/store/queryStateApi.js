import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTheme = makeQueryState(["theme"], "dark");
export const useLikes = makeQueryState(["likes"], [1, 2, 3]);

function makeQueryState(queryKey, initialData) {
  return () => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
      queryKey,
      queryFn: () => queryClient.getQueryData(queryKey),
      initialData,
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: false,
    });

    const setState = (updater) => queryClient.setQueryData(queryKey, updater);

    return [data, setState];
  };
}
