function RadioBotton({ selected, value, setSelected }) {
  return (
    <button
      className={`grow rounded-sm border border-gray-400/90 py-2 text-sm font-medium
      leading-none text-gray-600 transition first:rounded-l-md last:rounded-r-md
      hover:bg-gray-50/50 hover:shadow active:bg-gray-200/50 active:shadow
      dark:text-zinc-400 dark:hover:bg-gray-500/50 dark:hover:text-zinc-900
      ${selected ? "bg-gray-400/80 shadow hover:bg-gray-400/50 dark:text-zinc-900" : ""}`}
      type="button"
      value={value}
      onClick={(e) => setSelected(e.target.value)}
    > { value }
    </button>
  );
}

export function RadioBottons({ variants, currentValue, setValue }) {
  const radioItems = variants.map((variant) => (
    <RadioBotton
      key={variant}
      value={variant}
      selected={variant === currentValue}
      setSelected={setValue}
    > { variant }
    </RadioBotton>
  ));

  return (
    <div className="flex grow space-x-0.5 rounded-lg py-1 first:rounded-l-md " role="group">
      { radioItems }
    </div>
  );
}
