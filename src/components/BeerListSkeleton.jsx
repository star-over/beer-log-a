export function BeerListSkeleton() {
  const skeleton = (
    <li className="min-w-max bg-white p-4 shadow rounded">
      <div className="flex">

        <div className="flex flex-col justify-start gap-4">
          {/* image */}
          <div className="h-24 w-16 bg-gray-300 rounded animate-pulse" />
          <div className="h-10 w-auto bg-gray-300 rounded animate-pulse" />
        </div>

        <div className="ml-4 max-w-lg grow">

          <div className="flex justify-between items-start">
            {/* title */}
            <div>
              <div className="h-4 w-24 bg-gray-300 rounded-full animate-pulse" />
              <div className="h-3 w-60 mt-1 bg-gray-300 rounded-full animate-pulse" />
            </div>
            {/* favorite */}
            <div className="h-6 w-6 bg-gray-300 rounded-full animate-pulse" />
          </div>

          {/* attributes */}
          <div className="mt-2 flex items-baseline justify-between">
            <div className="flex items-baseline justify-start gap-2">
              <div className="h-4 w-80 bg-gray-300 rounded-full animate-pulse" />
            </div>
            {/* id */}
            <div className="h-3 w-8 bg-gray-300 rounded-full animate-pulse" />
          </div>

          {/* description */}
          <div className="mt-2 flex flex-col gap-1">
            <div className="h-4 w-full bg-gray-300 rounded-full animate-pulse" />
            <div className="h-4 w-full bg-gray-300 rounded-full animate-pulse" />
            <div className="h-4 w-72 bg-gray-300 rounded-full animate-pulse" />
          </div>

          {/* best with */}
          <div className="mt-2 flex flex-col gap-1">
            <div className="h-3 w-48 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-3 w-32 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-3 w-36 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-3 w-24 bg-gray-300 rounded-full animate-pulse" />
          </div>

        </div>
      </div>
    </li>
  );

  const cards = Array(3).fill(skeleton);
  return (
    <ul className="space-y-3 my-3">
      {cards.map((card) => card)}
    </ul>
  );
}
