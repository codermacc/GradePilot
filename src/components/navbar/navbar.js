import "./navbar.css";

export function Navbar() {

  const nav = document.createElement("header");

  nav.className = "gp-navbar";

  nav.innerHTML = `

  <button
  id="menuBtn"
  class="nav-btn">

  ☰

  </button>

  <div class="nav-center">

    <h1>GradePilot</h1>

  </div>

  <button
  id="themeBtn"
  class="nav-btn">

  🌙

  </button>

  `;

  return nav;
}
