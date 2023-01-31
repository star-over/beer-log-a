import { useTheme } from "../store/themeApi";
import { ThemeButton } from "./ThemeButton";

export function FilterTheme() {
  const { getTheme, setTheme } = useTheme();
  return (
    <div className="w-12 h-12 flex flex-col justify-center">
      <ThemeButton checked={getTheme()} onChange={(e) => setTheme(e.target.checked)} />
    </div>
  );
}
