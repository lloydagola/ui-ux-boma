import React from "react";
import "./sidebar.css";

const Sidebar = () => (
  <div
    className="welcome-sidebar  wow fadeInDown "
    data-wow-iteration="1"
    data-wow-delay=".5s"
    data-wow-duration=".6s"
  >
    <i class="fab fa-buffer font-48" />
    <div className="sidebar-spacer" />
    <div className="vertical-line" />
    <p>Boma</p>
    <div className="vertical-line" />
    <div className="sidebar-spacer" />
    <div className="social">
      <a href="https://www.facebook.com/charles.ouma.18" target="_blank">
        <i class="fab fa-facebook-f" />
      </a>
      <a
        href="https://ke.linkedin.com/in/charles-b-g-ouma-71645b12"
        target="_blank"
      >
        <i class="fab fa-twitter" />
      </a>
      <a
        href="https://ke.linkedin.com/in/charles-b-g-ouma-71645b12"
        target="_blank"
      >
        <i class="fab fa-instagram" />
      </a>
      <a
        href="https://ke.linkedin.com/in/charles-b-g-ouma-71645b12"
        target="_blank"
      >
        <i class="fab fa-youtube" />
      </a>
    </div>
  </div>
);

export default Sidebar;
