const routes = {};

export function registerRoute(name, render) {
  routes[name] = render;
}

export function navigate(routeName) {
  const app = document.querySelector("#app");

  if (!routes[routeName]) {
    app.innerHTML = "<h1>Page Not Found</h1>";
    return;
  }

  app.innerHTML = "";
  app.appendChild(routes[routeName]());
}

import { Dashboard } from "../pages/dashboard/dashboard.js";

export function router(route) {
  const page = document.getElementById("page");

  switch (route) {
    case "#dashboard":
    default:
      page.innerHTML = "";
      page.appendChild(Dashboard());
      break;
  }
}
