import React from "react";

export default function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="logo" onClick={() => setCurrentPage("home")}>
          SPA
        </button>

        <div className="nav-links">
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className={currentPage === "about" ? "active" : ""}
            onClick={() => setCurrentPage("about")}
          >
            About
          </button>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
