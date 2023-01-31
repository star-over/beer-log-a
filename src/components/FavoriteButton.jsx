import { useFavorites } from "../store/favoritesApi";
import { HeartButton } from "./HeartButton";

export function FavoriteButton({ beerId }) {
  const { isFavorite, toggleFavorite } = useFavorites(beerId);

  return (
    <HeartButton
      checked={isFavorite}
      onChange={toggleFavorite}
    />
  );
}
