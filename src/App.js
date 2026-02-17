import Hero from "./components/Hero";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />
    </div>
  );
}