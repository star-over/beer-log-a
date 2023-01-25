export function BeerListItem({ beer }) {
  return (
    <li
      className="overflow-hidden bg-white py-4 shadow sm:rounded-md sm:px-6"
      key={beer.id}
    >
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <img className="h-10" src={beer.image_url} alt={`Beer ${beer.name}`} />
        </div>
        <div>
          <h4 className="text-lg font-bold">{beer.name}</h4>
          <p className="mt-1">
            {beer.tagline}
          </p>
        </div>
      </div>
    </li>
  );
}
