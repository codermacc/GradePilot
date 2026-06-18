import { state } from "./state.js";
import { navigate, registerRoute } from "./router.js";

import { SplashPage } from "../pages/splash/splash.js";
import { OnboardingPage } from "../pages/onboarding/onboarding.js";
import { DashboardPage } from "../pages/dashboard/dashboard.js";

export function initApp() {

  document.documentElement.setAttribute(
    "data-theme",
    state.theme
  );

  registerRoute("splash", SplashPage);
  registerRoute("onboarding", OnboardingPage);
  registerRoute("dashboard", DashboardPage);

  navigate("splash");
}

document.addEventListener(
  "click",
  (e) => {

    if(
      e.target.id === "menuBtn"
    ){

      document
      .querySelector(
        ".gp-sidebar"
      )
      ?.classList.toggle(
        "open"
      );
    }

  }
);

import { router } from "./router.js";
import { Navbar } from "../components/navbar/navbar.js";
import { Sidebar } from "../components/sidebar/sidebar.js";

export function initApp() {
  const root = document.getElementById("app");

  root.innerHTML = `
    <div class="app-container">
      <div id="sidebar"></div>

      <div class="main-area">
        <div id="navbar"></div>
        <div id="page"></div>
      </div>
    </div>
  `;

  // Mount layout components
  document.getElementById("navbar").appendChild(Navbar());
  document.getElementById("sidebar").appendChild(Sidebar());

  // Load initial route
  router(window.location.hash || "#dashboard");
}
