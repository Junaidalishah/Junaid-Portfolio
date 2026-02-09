import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContextInstance";

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined || context === null) {
    // Return a fallback instead of throwing to prevent app crash
    return { isDarkMode: false, toggleDarkMode: () => {} };
  }
  return context;
}
