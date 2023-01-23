import { useQuery, useQueryClient } from "@tanstack/react-query";

function makeQueryState(queryKey) {
  return (initialData) => {
    const result = useQuery({
      queryKey,
      initialData,
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: false,
    });
    const setFn = (updater) => useQueryClient().setQueryData(queryKey, updater);

    return [result, setFn];
  };
}

export const useTheme = makeQueryState(["theme"]);
