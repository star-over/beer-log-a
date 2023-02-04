import React from "react";
import { useInfiniteBeers } from "../store/beerApi";
import { BeerErrorCard } from "./BeerErrorCard";
import { BeerCard } from "./BeerCard";
import { BeerListSkeleton } from "./BeerListSkeleton";
import { MoreButton } from "./MoreButton";
import { BeerNotfoundCard } from "./BeerNotfoundCard";

export function BeerList() {
  const beers = useInfiniteBeers();

  if (beers.isLoading) return <BeerListSkeleton />;
  if (beers.error) return <BeerErrorCard message={beers.error.message} />;
  if (beers?.data?.pages?.flat().length === 0) return <BeerNotfoundCard />;

  return (
    <>
      <ul className="my-3 max-w-lg space-y-3">
        {beers?.data?.pages?.flat().map((beer) => (
          <React.Fragment key={beer.id}>
            <BeerCard beer={beer} />
          </React.Fragment>
        ))}
      </ul>
      <MoreButton
        handleMore={beers.fetchNextPage}
        isFetchingNextPage={beers.isFetchingNextPage}
        hasNextPage={beers.hasNextPage}
      />
    </>
  );
}
