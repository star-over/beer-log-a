import { useTheme } from "../store/themeApi";
import { ThemeButton } from "./ThemeButton";

export function FilterTheme() {
  const { getTheme, setTheme } = useTheme();
  return (
    <div className="flex h-12 w-12 flex-col justify-center">
      <ThemeButton checked={getTheme()} onChange={(e) => setTheme(e.target.checked)} />
    </div>
  );
}
