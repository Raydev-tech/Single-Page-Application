import React from "react";

export default function About() {
  return (
    <section className="container">
      <h1>About Us</h1>
      <p className="subtitle">
        Technologies powering this single page application
      </p>

      <div className="cards">
        <div className="card">
          <h3>React</h3>
          <p>Component-based UI with shared state</p>
        </div>
        <div className="card">
          <h3>SPA</h3>
          <p>No full page reloads</p>
        </div>
        <div className="card">
          <h3>CSS</h3>
          <p>Clean responsive styling</p>
        </div>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To demonstrate how simple tools can build smooth, modern web
          applications.
        </p>
      </div>
    </section>
  );
}
