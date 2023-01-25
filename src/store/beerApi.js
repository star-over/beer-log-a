import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// https://api.punkapi.com/v2/beers
// https://api.punkapi.com/v2/beers/1
// https://api.punkapi.com/v2/beers/random
// https://api.punkapi.com/v2/beers?page=2&per_page=80
// https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6

const baseUrl = "https://api.punkapi.com/v2/beers";

const beerKeys = {
  all: ["beers"],
  filter: (filters) => [...beerKeys.all, { filters }],
  detail: (id) => [...beerKeys.all, id],
  page: (page = 1, perPage = 10) => [...beerKeys.all, page, perPage],
};

export function useInfiniteBeers() {
  const perPage = 4;
  const params = {
    // abv_gt: 12,
    per_page: perPage,
  };
  return useInfiniteQuery({
    queryKey: beerKeys.all,
    queryFn: ({ pageParam = 1 }) => axios(baseUrl, { params: { ...params, page: pageParam } })
      .then((res) => res.data),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined;
      return pages.length + 1;
    },
  });
}

export function useBeer(id) {
  return useQuery({
    queryKey: beerKeys.detail(id),
    queryFn: () => axios
      .get(`${baseUrl}/${id}`)
      .then((res) => res.data)
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
