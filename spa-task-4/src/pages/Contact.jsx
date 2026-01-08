import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const { setUserName } = useContext(AppContext);

  return (
    <section className="page">
      <h1>Contact</h1>
      <p>Update your name to see shared state across pages:</p>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
    </section>
  );
}
