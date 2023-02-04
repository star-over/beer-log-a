import React from "react";

export function BeerListSkeleton() {
  const skeleton = (
    <li className="min-w-max rounded bg-white p-4 shadow dark:bg-zinc-500">
      <div className="flex">

        <div className="flex flex-col justify-start gap-4">
          {/* image */}
          <div className="h-24 w-16 animate-pulse rounded bg-gray-300" />
          <div className="h-10 w-auto animate-pulse rounded bg-gray-300" />
        </div>

        <div className="ml-4 max-w-lg grow">

          <div className="flex items-start justify-between">
            {/* title */}
            <div>
              <div className="h-4 w-24 animate-pulse rounded-full bg-gray-300" />
              <div className="mt-1 h-3 w-60 animate-pulse rounded-full bg-gray-300" />
            </div>
            {/* favorite */}
            <div className="h-6 w-6 animate-pulse rounded-full bg-gray-300" />
          </div>

          {/* attributes */}
          <div className="mt-2 flex items-baseline justify-between">
            <div className="flex items-baseline justify-start gap-2">
              <div className="h-4 w-80 animate-pulse rounded-full bg-gray-300" />
            </div>
            {/* id */}
            <div className="h-3 w-8 animate-pulse rounded-full bg-gray-300" />
          </div>

          {/* description */}
          <div className="mt-2 flex flex-col gap-1">
            <div className="h-4 w-full animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-full animate-pulse rounded-full bg-gray-300" />
            <div className="h-4 w-72 animate-pulse rounded-full bg-gray-300" />
          </div>

          {/* best with */}
          <div className="mt-2 flex flex-col gap-1">
            <div className="h-3 w-48 animate-pulse rounded-full bg-gray-300" />
            <div className="h-3 w-32 animate-pulse rounded-full bg-gray-300" />
            <div className="h-3 w-36 animate-pulse rounded-full bg-gray-300" />
            <div className="h-3 w-24 animate-pulse rounded-full bg-gray-300" />
          </div>

        </div>
      </div>
    </li>
  );

  const cards = Array(3).fill(skeleton);
  return (
    <ul className="my-3 space-y-3">
      {cards.map((card, i) => (
        <React.Fragment key={i}>
          {card}
        </React.Fragment>
      ))}
    </ul>
  );
}
