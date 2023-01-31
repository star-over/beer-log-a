/* eslint-disable jsx-a11y/label-has-associated-control */
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export function ThemeButton({ checked, onChange }) {
  return (
    <label>
      <input className="peer hidden" type="checkbox" checked={checked} onChange={onChange} />
      <MoonIcon className="peer-checked:hidden  text-gray-400 hover:text-gray-500 dark:text-white" aria-hidden="true" />
      <SunIcon className="hidden peer-checked:block text-gray-400 hover:text-gray-500 dark:text-zinc-300 dark:hover:text-zinc-50" aria-hidden="true" />
    </label>
  );
}
