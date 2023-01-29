import { BeerColor } from "./BeerColor";
import { FavoriteButton } from "./FavoriteButton";
import { LongString } from "./LongString";

export function BeerCard({ beer }) {
  return (
    <li className=" bg-white py-4 pr-4 shadow rounded">
      <div className="flex">

        <div className="mt-2 w-24 shrink-0 flex flex-col">
          {/* image */}
          <img className="h-24 mx-auto hover:scale-150 transition-transform" src={beer.image_url} alt={`Beer ${beer.name}`} />
          <BeerColor srm={beer.srm} />
        </div>

        <div className="max-w-sm grow">

          <div className="flex justify-between items-start">
            {/* title */}
            <div>
              <h4 className="text text-slate-600 font-bold">{beer.name}</h4>
              <p className="text-sm text-slate-500 italic">{beer.tagline}</p>
            </div>
            <FavoriteButton beerId={beer.id} />
          </div>

          {/* attributes */}
          <div className="text-sm text-slate-600 font-normal flex items-baseline justify-between">
            <div className="flex items-baseline justify-start gap-2">
              <span>ALC.: <strong className="text-base">{beer.abv}</strong>%</span>
              <span>{`IBU: ${beer.ibu}`}</span>
              <span>{`PH: ${beer.ph}`}</span>
              <span>{`SINCE: ${beer.first_brewed}`}</span>
            </div>
            <span className="text-slate-300 text-xs">{`ID: ${beer.id}`}</span>
          </div>

          {/* description */}
          <div className="mt-1 text-sm text-slate-600 font-normal leading-4">
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
