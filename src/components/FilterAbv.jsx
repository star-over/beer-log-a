import { abvVariants, useFilters } from "../store/filterApi";
import { RadioBottons } from "./RadioButtons";

export function FilterAbv() {
  const { getFilterAbv, setFilterAbv } = useFilters();

  return (
    <RadioBottons
      variants={Object.keys(abvVariants)}
      currentValue={getFilterAbv()}
      setValue={setFilterAbv}
    />
  );
}
