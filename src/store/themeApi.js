import { useQuery, useQueryClient } from "@tanstack/react-query";

const themeKeys = { all: ["theme"] };

export function useTheme() {
  return useQuery({
    queryKey: themeKeys.all,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
    initialData: "dark",
    queryFn: null,
  });
}

export function setTheme(theme) {
  useQueryClient().setQueryData(themeKeys.all, theme);
}
