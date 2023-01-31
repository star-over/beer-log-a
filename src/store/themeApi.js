import { makeQueryState } from "./queryStateFactory";

export function useTheme() {
  const queryKey = ["theme"];
  const defaultTheme = false;
  const themeName = "dark";
  const [themeState, setThemeState] = makeQueryState(queryKey, defaultTheme);
  const getTheme = () => themeState;
  const setTheme = (value) => {
    setThemeState(value);
    const el = document.body;
    if (value) {
      el.classList.add(themeName);
    } else {
      el.classList.remove(themeName);
    }
  };
  return { getTheme, setTheme };
}
