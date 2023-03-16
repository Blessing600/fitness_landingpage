import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import WeghtlossMethod from "./components/WeghtlossMethod";
import Testimony from "./components/Testimony";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <WeghtlossMethod />
      {/* 
      <Testimony />
      <Articles />
      <Footer /> */}
    </div>
  );
}

export default App;
