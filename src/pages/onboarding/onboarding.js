import "./onboarding.css";
import { navigate } from "../../core/router.js";

export function OnboardingPage() {

  const page =
  document.createElement("section");

  page.className =
  "onboarding-page";

  page.innerHTML = `

  <div class="onboarding-card gp-card">

    <h1>
      Welcome to GradePilot
    </h1>

    <p>
      Your Academic Success Platform
    </p>

    <ul>

      <li>
        Track CGPA Progress
      </li>

      <li>
        Predict Future Results
      </li>

      <li>
        Works Completely Offline
      </li>

      <li>
        All Data Stays On Your Device
      </li>

    </ul>

    <button
    class="gp-btn"
    id="startBtn">

      Get Started

    </button>

  </div>

  `;

  page
  .querySelector("#startBtn")
  .addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "onboardingComplete",
        true
      );

      navigate("dashboard");
    }
  );

  return page;
}
