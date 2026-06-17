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
