import { BeerColor } from "./BeerColor";
import { FavoriteButton } from "./FavoriteButton";

export function BeerCard({ beer }) {
  return (
    <li className="bg-slate-100 dark:bg-zinc-700 py-4 pr-4 shadow rounded">
      <div className="flex text-slate-600 dark:text-zinc-400">

        <div className="mt-2 w-24 shrink-0 flex flex-col">
          {/* image */}
          <img className="h-24 mx-auto hover:scale-150 transition-transform" src={beer.image_url} alt={`Beer ${beer.name}`} />
          <BeerColor srm={beer.srm} />
          <span className="text-center text-sm px-2 leading-4">{`since: ${beer.first_brewed}`}</span>
        </div>

        <div className="grow">

          <div className="flex justify-between items-start">
            {/* title */}
            <div>
              <h4 className="text font-bold">{beer.name}</h4>
              <p className="text-sm italic">{beer.tagline}</p>
            </div>
            {/* heart button */}
            <div className="w-6 h-6">
              <FavoriteButton beerId={beer.id} />
            </div>
          </div>

          {/* attributes */}
          <div className="text-s font-normal flex items-baseline justify-between">
            <div className="flex items-baseline justify-start gap-2">
              <span>ALC.: <strong className="text-base">{beer.abv}</strong>%</span>
              <span>{`IBU: ${beer.ibu}`}</span>
              <span>{`PH: ${beer.ph}`}</span>
            </div>
            <span className="text-slate-400 text-xs">{`ID: ${beer.id}`}</span>
          </div>

          {/* description */}
          <div className="mt-1 text-sm font-normal leading-4">
            {beer.description}
            {/* <LongString content={beer.description} /> */}
          </div>

          {/* best with */}
          <p className="mt-1 text-sm font-normal">This beer goes well with:</p>
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
