import { useQuery, useQueryClient } from "@tanstack/react-query";
import { makeQueryState } from "./queryStateFactory";

export const abvVariants = {
  all: { content: "All", gt: 0, lt: 9999 },
  free: { content: "Free", gt: 0, lt: 1 },
  low: { content: "Low", gt: 1, lt: 3 },
  light: { content: "Light", gt: 3, lt: 4 },
  regular: { content: "Regular", gt: 4, lt: 6 },
  strong: { content: "Strong", gt: 6, lt: 10 },
  extra: { content: "Extra", gt: 10, lt: 9999 }
};

export const srmVariants = {
  all: { content: "All", gt: 0, lt: 9999 },
  pale: { content: "Pale", gt: 0, lt: 10 },
  amber: { content: "Amber", gt: 10, lt: 20 },
  brown: { content: "Brown", gt: 20, lt: 50 },
  dark: { content: "Dark", gt: 50, lt: 9999 },
};

export function useTheme() {
  const queryKey = ["theme"];
  const defaultTheme = false;
  const themeName = "dark";
  const [themeState, setThemeState] = makeQueryState(queryKey, defaultTheme);
  const getTheme = () => themeState;
  const setTheme = (value) => {
    setThemeState(value);
    const el = document.body;
    if (value) {
      el.classList.add(themeName);
    } else {
      el.classList.remove(themeName);
    }
  };
  return { getTheme, setTheme };
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
  name: () => [...filterKeys.all, "name"],
  fav: () => [...filterKeys.all, "fav"],
  abv: () => [...filterKeys.all, "abv"],
  srm: () => [...filterKeys.all, "srm"],
};

export function useFilters() {
  const queryKey = filterKeys.all;
  const initialData = {};
  const queryClient = useQueryClient();
  const { data: favoriteIds } = useFavorites(1);

  const { data } = useQuery({
    queryKey,
    queryFn: () => queryClient.getQueryData(queryKey),
    initialData,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });

  const defaultFav = false;
  const [fav, setFav] = makeQueryState(filterKeys.fav(), defaultFav);
  const getFilterFav = () => fav;
  const setFilterFav = (value) => {
    setFav(value);
    const idsParam = "ids";
    delete data[idsParam];

    const result = (value && favoriteIds.length > 0)
      ? { ...data, ids: favoriteIds.join("|") }
      : data;

    queryClient.setQueryData(queryKey, result);
  };

  const defaultName = "";
  const [name, setName] = makeQueryState(filterKeys.name(), defaultName);
  const getFilterName = () => name;
  const setFilterName = (value) => {
    setName(value);
    const nameParam = "beer_name";
    delete data[nameParam];
    if (value) {
      const result = { ...data, [nameParam]: value };
      queryClient.setQueryData(queryKey, result);
    }
  };

  const defaultAdvKey = Object.keys(abvVariants)[0];
  const [abv, setAbv] = makeQueryState(filterKeys.abv(), defaultAdvKey);
  const getFilterAbv = () => abv;
  const setFilterAbv = (value) => {
    setAbv(value);
    const gtParam = "abv_gt";
    const ltParam = "abv_lt";
    delete data[gtParam];
    delete data[ltParam];
    if (value !== defaultAdvKey) {
      const result = {
        ...data,
        [gtParam]: abvVariants[value].gt,
        [ltParam]: abvVariants[value].lt,
      };
      queryClient.setQueryData(queryKey, result);
    }
  };

  const defaultSrmKey = Object.keys(srmVariants)[0];
  const [srm, setSrm] = makeQueryState(filterKeys.srm(), defaultSrmKey);
  const getFilterSrm = () => srm;
  const setFilterSrm = (value) => {
    setSrm(value);
    const gtParam = "ebc_gt";
    const ltParam = "ebc_lt";
    delete data[gtParam];
    delete data[ltParam];
    if (value !== defaultSrmKey) {
      const result = {
        ...data,
        [gtParam]: srmVariants[value].gt,
        [ltParam]: srmVariants[value].lt,
      };
      queryClient.setQueryData(queryKey, result);
    }
  };

  const resetFilter = () => {
    setFilterFav(defaultFav);
    setFilterName(defaultName);
    setFilterAbv(defaultAdvKey);
    setFilterSrm(defaultSrmKey);
  };
  const getFilterObject = () => data;
  return {
    getFilterFav,
    setFilterFav,

    getFilterName,
    setFilterName,

    getFilterAbv,
    setFilterAbv,

    getFilterSrm,
    setFilterSrm,

    resetFilter,
    getFilterObject,
  };
}
