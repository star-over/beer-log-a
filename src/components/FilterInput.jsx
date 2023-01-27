/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { useFilters } from "../store/queryStateApi";

export function FilterInput() {
  const { getFilterName, setFilterName } = useFilters();
  const [beerName, setBeerName] = useState(getFilterName());

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => { setFilterName(beerName); }, 500);
    return () => clearTimeout(timer);
  }, [beerName]);

  return (
    <>
      <label
        className=""
        htmlFor="beerName"
      >Search beer:
      </label>
      <input
        className=""
        type="text"
        name="beerName"
        id="beerName"
        placeholder="Search by name"
        value={beerName}
        onChange={(e) => setBeerName(e.target.value)}
      />
    </>
  );
}
