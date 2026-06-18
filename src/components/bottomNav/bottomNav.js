import "./bottomNav.css";

export function BottomNav(){

  const nav = document.createElement("nav");

  nav.className =
  "bottom-nav";

  nav.innerHTML = `

  <button class="active">
    Home
  </button>

  <button>
    Calculator
  </button>

  <button>
    Results
  </button>

  <button>
    Goals
  </button>

  <button>
    More
  </button>

  `;

  return nav;
}
