import React from "react";
import profile from "../Images/profilePic.jpg"  

function Bio() {
  return (
    <div> Bio
      <img
        className=""
        src={profile}
        alt="Profile Pic"
      />
      <p>
        Specialized IT Professional of 8 Years, delivering scalable solutions
        with clear communication and efficient management. Focused on quality
        assurance, I ensure cutting-edge support, software and successful
        project deliveries. I have a keen eye for detail and strong willingness
        to learn new things.
      </p>
    </div>
  );
}

export default Bio;
