import { useState } from "react";

// components imports
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Highlights from "./components/Highlights.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
    </div>
  );
}

export default App;
