import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTheme = makeQueryState(["theme"], "dark");
export const useFilter = makeQueryState(["filter"], {});

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

export const useFavorites = () => {
  const queryKey = ["favorites"];
  const initialData = [1, 3, 5];
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData(queryKey),
    initialData,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });

  const isFavorite = (targetId) => data.includes(targetId);

  const toggleFavorite = (targetId) => {
    const result = isFavorite(targetId)
      ? data.filter((id) => id !== targetId)
      : [...data, targetId];
    queryClient.setQueryData(queryKey, result);
  };

  return { data, isFavorite, toggleFavorite };
};
