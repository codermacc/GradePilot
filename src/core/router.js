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
