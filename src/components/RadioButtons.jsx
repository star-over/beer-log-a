function RadioBotton({ selected, value, setSelected }) {
  return (
    <button
      className={`flex-grow py-2 text-sm font-medium leading-none border border-gray-400/90 \
      rounded-sm first:rounded-l-md last:rounded-r-md \
      text-gray-600 dark:text-zinc-400 active:bg-gray-200/50 hover:bg-gray-50/50 dark:hover:bg-gray-500/50 dark:hover:text-zinc-900 hover:shadow active:shadow \
      transition ${selected ? "bg-gray-400/80 hover:bg-gray-400/50 dark:text-zinc-900 shadow" : ""}`}
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
    <div className="flex-grow flex py-1 space-x-0.5 rounded-lg first:rounded-l-md " role="group">
      { radioItems }
    </div>
  );
}
