/* eslint-disable jsx-a11y/label-has-associated-control */
import { HeartIcon as IconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as IconOutLine } from "@heroicons/react/24/outline";

export function HeartButton({ checked, onChange }) {
  return (
    <label>
      <input className="peer hidden" type="checkbox" checked={checked} onChange={onChange} />
      <IconOutLine
        className="cursor-pointer  text-gray-400 hover:text-gray-500 peer-checked:hidden"
        aria-hidden="true"
      />
      <IconSolid
        className="hidden cursor-pointer text-red-400 hover:text-red-500 peer-checked:block"
        aria-hidden="true"
      />
    </label>
  );
}
