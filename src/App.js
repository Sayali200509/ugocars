import Hero from "./components/Hero";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Nav — "Home" label matching Figma */}
      <nav className="app__nav">
        <span className="app__nav-link app__nav-link--active">Home</span>
      </nav>

      <Hero />
    </div>
  );
}