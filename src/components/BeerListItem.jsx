import { LongString } from "./LongString";

export function BeerListItem({ beer }) {
  return (
    <li className="overflow-hidden bg-white py-4 pr-4 shadow rounded">
      <div className="flex items-center">

        {/* image */}
        <div className="mt-2 h-24 w-24 shrink-0">
          <img className="h-24 mx-auto hover:scale-150 transition-transform" src={beer.image_url} alt={`Beer ${beer.name}`} />
        </div>

        {/* title */}
        <div className="max-w-lg">
          <h4 className="text text-slate-600 font-bold">{beer.name}</h4>
          <p className="text-sm text-slate-500 font-bold">{beer.tagline}</p>

          {/* attributes */}
          <p className="mt-2 text-sm text-slate-600 font-normal flex justify-start gap-2">
            <span>{`ALC.: ${beer.abv}%`}</span>
            <span>{`IBU: ${beer.ibu}`}</span>
            <span>{`PH: ${beer.ph}`}</span>
            <span>{`SINCE: ${beer.first_brewed}`}</span>
          </p>

          {/* description */}
          <div className="mt-1 text-sm text-slate-600 font-normal">
            <LongString content={beer.description} />
          </div>

          {/* best with */}
          <p className="mt-1 text-sm text-slate-600 font-normal">This beer goes well with:</p>
          <ul className="list-disc list-inside leading-4">
            {beer.food_pairing.map((food, i) => (
              <li key={i}>
                <span className="text-xs">{food}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </li>
  );
}
