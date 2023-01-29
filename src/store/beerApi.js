import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useFilters } from "./queryStateApi";

// https://api.punkapi.com/v2/beers
// https://api.punkapi.com/v2/beers?page=2&per_page=80
// https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6
// beer_name, abv_gt, ebc_gt, ids

const baseUrl = "https://api.punkapi.com/v2/beers";

export const beerKeys = {
  all: ["beers"],
  filter: (filters) => [...beerKeys.all, { filters }],
  detail: (id) => [...beerKeys.all, id],
  page: (page = 1, perPage = 10) => [...beerKeys.all, page, perPage],
};

export function useInfiniteBeers() {
  const { getFilterObject } = useFilters();
  const perPage = 4;
  const filters = getFilterObject();
  const params = { per_page: perPage, };
  return useInfiniteQuery({
    queryKey: beerKeys.filter(filters),
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios(baseUrl, { params: { ...params, page: pageParam, ...filters } });
      return res.data;
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < perPage) return undefined;
      return pages.length + 1;
    },
  });
}

export function useBeers() {
  return useQuery({
    queryKey: beerKeys.all,
    queryFn: () => axios
      .get(baseUrl)
      .then((res) => res.data)
  });
}
