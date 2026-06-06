import React from "react";
import world from "../assets/world.png";
import "./HeroSection.css";

const HeroSection = () => {
    const handleScroll = () => {
    const planetSection = document.getElementById("planet-data"); 
    planetSection?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const handleScrolll = () => {
  const FormSection = document.getElementById("Form-section" );
  FormSection?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };


  return (
    <div>
      {/* Hero-content */}
      <div className="hero-content">
        {/* text */}
        <div className="text">
          <h2>Explore Our Solar System Through Data</h2>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          {/* hero-button */}
          <div className="hero-button">
            <button onClick={handleScroll}>Explore the Data</button>
            <button onClick={handleScrolll}>Contact Us</button>
          </div>
        </div>
        {/* hero-image */}
        <div className="hero-image">
          <img src={world} alt="world" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
