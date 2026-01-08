import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSent(false);
    }, 3000);
  };

  return (
    <section className="container">
      <h1>Get in Touch</h1>
      <p className="subtitle">We’d love to hear from you</p>

      <div className="contact-grid">
        <div>
          <p><strong>Email:</strong> hello@example.com</p>
          <p><strong>Location:</strong> San Francisco, CA</p>
        </div>

        <div className="form-box">
          {sent ? (
            <div className="success">✓ Message Sent!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
