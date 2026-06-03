import React from "react";
import world from "../assets/world.png";
import "./HeroSection.css";

const HeroSection = () => {
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
            <button>Explore the Data</button>
            <button>Contact Us</button>
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
