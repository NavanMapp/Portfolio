import React, { useRef } from "react";
import profile from "../Images/profilePic.jpg"

function Bio() {

  return (
    <section className="bio-section" >
      <div className="bioName">Navan Maphalala</div>
      <div className="bioTitle">IT Administrator & Software Developer</div>
      <header>
        <img
          className="bioImage"
          src={profile}
          alt="Profile Pic"
        />
      </header>

      <p>
        Specialized IT Professional of 8 Years, delivering scalable solutions
        with clear communication and efficient management. Focused on quality
        assurance, I ensure cutting-edge support, software and successful
        project deliveries. I have a keen eye for detail and strong willingness
        to learn new things.
      </p>
    </section>
  );
}

export default Bio;
