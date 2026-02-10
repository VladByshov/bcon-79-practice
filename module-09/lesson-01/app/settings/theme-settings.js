import { saveLS } from "../utils/localStorage.js";
import refs from "../utils/refs.js";
import { store } from "../utils/store.js";
import { STORAGE_KEY } from "../utils/variables.js";

// Theme toggle
export function setTheme(theme) {
  const currentTheme = theme ?? "light";

  refs.themeToggle.value = currentTheme;

  currentTheme === "light"
    ? refs.themeToggle
    : refs.themeToggle.setAttribute("checked", "");

  document.documentElement.setAttribute("data-bs-theme", currentTheme);

  store.appTheme = currentTheme;
}

export function onThemeToggle(event) {
  const currentTheme = store.appTheme === "light" ? "dark" : "light";

  setTheme(currentTheme);

  saveLS(STORAGE_KEY.appTheme, currentTheme);

  store.appTheme = currentTheme;
}