import "./splash.css";
import { navigate } from "../../core/router.js";

export function SplashPage() {
  const page = document.createElement("section");

  page.className = "splash-page fade-in";

  page.innerHTML = `
  
    <div class="splash-content">

      <div class="logo-circle">
        GP
      </div>

      <h1>GradePilot</h1>

      <p>
        Plan. Track. Graduate.
      </p>

      <div class="loader"></div>

    </div>

  `;

  setTimeout(() => {
    const completed =
      localStorage.getItem("onboardingComplete");

    if (completed === "true") {
      navigate("dashboard");
    } else {
      navigate("onboarding");
    }
  }, 2500);

  return page;
}
