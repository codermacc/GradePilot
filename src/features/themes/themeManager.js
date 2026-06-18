export function setTheme(theme){

  document
  .documentElement
  .setAttribute(
    "data-theme",
    theme
  );

  localStorage.setItem(
    "theme",
    theme
  );
}

export function getTheme(){

  return (
    localStorage.getItem(
      "theme"
    ) || "dark"
  );
}
