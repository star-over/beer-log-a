import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTheme = makeQueryState(["theme"], "dark");
export const useFilterFavorites = makeQueryState(["formFavorites"], false);

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

const filterKeys = {
  all: ["filters"],
  name: () => [...filterKeys.all, "beer_name"],
  ids: () => [...filterKeys.all, "ids"],
};
export function useFilters() {
  const queryKey = ["filters"];
  const beerName = "beer_name";
  const ids = "ids";
  const initialData = {};
  const queryClient = useQueryClient();
  const { data: favoriteIds } = useFavorites(1);
  console.log("🚀 > useFilters > favoriteIds", favoriteIds);

  const { data } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData(queryKey),
    initialData,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });

  const getFilterFavorites = () => {
    return Boolean(data[ids]);
  };

  const setFilterFavorites = () => {
    const result = (getFilterFavorites() || favoriteIds.length === 0)
      ? {}
      : { ids: favoriteIds.join("|") };
    queryClient.setQueryData(queryKey, result);
  };

  const getFilterName = () => {
    if (!data[beerName]) return "";
    return data[beerName];
  };
  const setFilterName = (value) => {
    const result = (value)
      ? { ...data, [beerName]: value }
      : delete data[beerName];
    queryClient.setQueryData(queryKey, result);
  };

  const getFilterObject = () => data;
  return {
    getFilterName,
    setFilterName,
    getFilterObject,
    getFilterFavorites,
    setFilterFavorites
  };
}
