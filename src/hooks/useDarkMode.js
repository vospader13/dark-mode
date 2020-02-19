import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const UseDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode__toggle");

  const prefersDarkMode = getPrefColorScheme();

  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;
  useEffect(() => {
    const element = window.document.body;
    if (enabled) {
      element.classList.add("dark-mode");
    } else {
      element.classList.remove("dark-mode");
    }
  }, [enabled]);
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return [enabled, setEnabledState];
};