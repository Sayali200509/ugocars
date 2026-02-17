import Navbar   from "./components/Navbar";
import Home     from "./components/Home";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Home />      {/* hero section with car image */}
      <Navbar />    {/* navbar below hero */}
      <Desktop1 />  {/* "Your Journey, Your Freedom" section */}
      <Navbar />    {/* navbar at bottom */}
      <Desktop2 />  {/* "Renting is Super Easy" section */}
    </div>
  );
}