import React from "react";
import video from "../assets/Planet-video.mp4";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video">
        <img src={video} alt="planetary data video thumbnail" />
      </div>
      <div className="text">
        <h3>How Planetary Data Helps Us Understand Space</h3>
        <p>
        Planetary science goes beyond images. Comparing <span className="highlight">mass</span>, <span className="highlight">diameter</span>,
<span className="highlight">gravity</span>, and <span className="highlight">density</span>, we gain insight into how planets form, behave,
and interact within the solar system.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
