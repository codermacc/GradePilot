import { Navbar } from "../../components/navbar/navbar.js";
import { Sidebar } from "../../components/sidebar/sidebar.js";
import { BottomNav } from "../../components/bottomNav/bottomNav.js";

export function DashboardPage(){

  const page =
  document.createElement("div");

  page.className =
  "dashboard-page";

  const sidebar = Sidebar();

  const navbar = Navbar();

  const bottomNav = BottomNav();

  page.append(
    sidebar,
    navbar
  );

  const content =
  document.createElement("main");

  content.innerHTML = `

  <section class="hero-card gp-card">

    <h2>
      Welcome Back
    </h2>

    <p>
      Track your academic success.
    </p>

  </section>

  `;

  page.append(
    content,
    bottomNav
  );

  return page;
}


