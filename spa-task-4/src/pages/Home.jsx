import React from "react";

export default function Home() {
  return (
    <section className="container">
      <div className="grid">
        <div>
          <h1>Welcome to Our Single Page Application</h1>
          <p>
            Experience smooth navigation without page reloads. Built with React
            and clean CSS for performance and simplicity.
          </p>

          <div className="cards">
            <div className="card">
              <h4>Fast</h4>
              <p>Instant page switching</p>
            </div>
            <div className="card">
              <h4>Smooth</h4>
              <p>Clean transitions</p>
            </div>
          </div>
        </div>

        <div className="hero-box">
          <h2>SPA</h2>
          <span>Modern React App</span>
        </div>
      </div>
    </section>
  );
}
