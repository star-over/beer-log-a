import React from "react";
import { useInfiniteBeers } from "../store/beerApi";
import { BeerListItem } from "./BeerListItem";
import { MoreButton } from "./MoreButton";

export function BeerList() {
  const beers = useInfiniteBeers();
  console.log("🚀 > App > beers", beers);

  if (beers.isLoading) return "Loading...";
  if (beers.error) return `An error has occurred: ${beers.error.message}`;
  return (
    <div className="">
      <ul className="space-y-3 my-3">
        {beers?.data?.pages?.flat().map((beer) => (
          <React.Fragment key={beer.id}>
            <BeerListItem beer={beer} />
          </React.Fragment>
        ))}
      </ul>
      <MoreButton
        handleMore={beers.fetchNextPage}
        isFetchingNextPage={beers.isFetchingNextPage}
        hasNextPage={beers.hasNextPage}
      />
    </div>
  );
}
