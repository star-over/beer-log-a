import { srmVariants, useFilters } from "../store/filterApi";
import { RadioBottons } from "./RadioButtons";

export function FilterSrm() {
  const { getFilterSrm, setFilterSrm } = useFilters();

  return (
    <RadioBottons
      variants={Object.keys(srmVariants)}
      currentValue={getFilterSrm()}
      setValue={setFilterSrm}
    />
  );
}
