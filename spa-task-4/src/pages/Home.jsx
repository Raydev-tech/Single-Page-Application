import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { userName } = useContext(AppContext);

  return (
    <section className="page">
      <h1>Welcome, {userName} 👋</h1>
      <p>
        This is a Single Page Application built with React as part of my
        internship tasks at Codveda.
      </p>
      <p>
        Navigate through the pages to see smooth routing and shared state
        management in action.
      </p>
    </section>
  );
}
