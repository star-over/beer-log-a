import { useQuery, useQueryClient } from "@tanstack/react-query";

export function makeQueryState(queryKey, initialData) {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData(queryKey),
    initialData,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });

  const setState = (updater) => {
    queryClient.setQueryData(queryKey, updater);
  };

  return [data, setState];
}
