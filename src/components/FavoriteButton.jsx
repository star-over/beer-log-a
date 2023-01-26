import { HeartIcon as IconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as IconOutLine } from "@heroicons/react/24/outline";
import { useFavorites } from "../store/queryStateApi";

export function FavoriteButton({ beerId }) {
  const { isFavorite, toggleFavorite } = useFavorites(beerId);

  const nonFavoriteClass = "text-gray-400 hover:text-gray-500";
  const favoriteClass = "text-red-400 hover:text-red-500 ";

  return (
    <button
      className={`${isFavorite ? favoriteClass : nonFavoriteClass} rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      type="button"
      onClick={toggleFavorite}
    >
      <span className="sr-only">check as favorite</span>
      {isFavorite
        ? <IconSolid className="h-6 w-6" aria-hidden="true" />
        : <IconOutLine className="h-6 w-6" aria-hidden="true" /> }
    </button>
  );
}
