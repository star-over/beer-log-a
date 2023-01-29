import { abvVariants, useFilters } from "../store/queryStateApi";
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
