import "./sidebar.css";

export function Sidebar() {
  const sidebar = document.createElement("aside");

  sidebar.className = "gp-sidebar";

  sidebar.innerHTML = `
  
  <div class="sidebar-header">
    <div class="sidebar-logo">
      GP
    </div>

    <div>
      <h2>GradePilot</h2>
      <p>Academic OS</p>
    </div>
  </div>

  <nav class="sidebar-nav">

    <div class="sidebar-group">

      <span class="sidebar-label">
        MAIN
      </span>

      <a href="#" class="sidebar-link active">
        Dashboard
      </a>

    </div>

    <div class="sidebar-group">

      <span class="sidebar-label">
        ACADEMIC
      </span>

      <a href="#">
        GPA Calculator
      </a>

      <a href="#">
        CGPA Calculator
      </a>

      <a href="#">
        Semester Planner
      </a>

      <a href="#">
        Results
      </a>

      <a href="#">
        Goals
      </a>

      <a href="#">
        Analytics
      </a>

    </div>

    <div class="sidebar-group">

      <span class="sidebar-label">
        CAMPUS
      </span>

      <a href="#">
        My Books
      </a>

      <a href="#">
        Forums
      </a>

      <a href="#">
        Calendar
      </a>

    </div>

    <div class="sidebar-group">

      <span class="sidebar-label">
        ACCOUNT
      </span>

      <a href="#">
        Notifications
      </a>

      <a href="#">
        Settings
      </a>

      <a href="#">
        Premium
      </a>

    </div>

  </nav>
  `;

  return sidebar;
}
