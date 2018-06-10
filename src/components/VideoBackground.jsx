import React from "react";
import videosrc from "../assets/kidvideo.mp4";
const VideoBackground = () => {
  return (
    <div className="landing-viewport">
      <video
        className="landing-viewport__video"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={videosrc} />
      </video>
      <h1>Solution Based Learning</h1>
    </div>
  );
};

export default VideoBackground;
