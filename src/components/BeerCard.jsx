import { BeerColor } from "./BeerColor";
import { FavoriteButton } from "./FavoriteButton";

export function BeerCard({ beer }) {
  return (
    <li className="rounded bg-slate-100 py-4 pr-4 shadow dark:bg-zinc-700">
      <div className="flex text-slate-600 dark:text-zinc-400">

        <div className="mt-2 flex w-24 shrink-0 flex-col">
          {/* image */}
          <img
            className="mx-auto h-24 transition-transform hover:scale-150"
            src={beer.image_url}
            alt={`Beer ${beer.name}`}
          />
          <BeerColor srm={beer.srm} />
          <span className="px-2 text-center text-sm leading-4">{`since: ${beer.first_brewed}`}</span>
        </div>

        <div className="grow">

          <div className="flex items-start justify-between">
            {/* title */}
            <div>
              <h4 className="font-bold">{beer.name}</h4>
              <p className="text-sm italic">{beer.tagline}</p>
            </div>
            {/* heart button */}
            <div className="h-6 w-6">
              <FavoriteButton beerId={beer.id} />
            </div>
          </div>

          {/* attributes */}
          <div className="flex items-baseline justify-between text-xs font-normal">
            <div className="flex items-baseline justify-start gap-2">
              <span>ALC.: <strong className="text-base">{beer.abv}</strong>%</span>
              <span>{`IBU: ${beer.ibu}`}</span>
              <span>{`PH: ${beer.ph}`}</span>
            </div>
            <span className="text-xs text-slate-400">{`ID: ${beer.id}`}</span>
          </div>

          {/* description */}
          <div className="mt-1 text-sm font-normal leading-4">
            {beer.description}
            {/* <LongString content={beer.description} /> */}
          </div>

          {/* best with */}
          <p className="mt-1 text-sm font-normal">This beer goes well with:</p>
          <ul className="list-inside list-disc leading-4">
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
