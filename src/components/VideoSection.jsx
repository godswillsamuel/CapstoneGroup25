import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section">

    <div className="video-wrapper">
        <video
          controls
          className="video-player"
          preload="metadata"
          loop
        >
          <source src="src\assets\space-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text">
        <h3>How Planetary Data Helps Us Understand Space</h3>
        <p>
          Planetary science goes beyond images. Comparing mass, diameter,
          gravity, and density, we gain insight into how planets form, behave,
          and interact within the solar system.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;