import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useFavorites(targetId) {
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

  const isFavorite = data.includes(targetId);

  const toggleFavorite = () => {
    const result = isFavorite
      ? data.filter((id) => id !== targetId)
      : [...data, targetId];
    queryClient.setQueryData(queryKey, result);
  };

  return { data, isFavorite, toggleFavorite };
}
