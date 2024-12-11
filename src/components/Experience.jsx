import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import '../App.css';

function Experience({ refProp }) {
  // Card Skeleton
  // image: "",
  // company: "",
  // location: "",
  // duration: "",
  // description: ""

  const cardData = [
    {
      image: "",
      company: "Sandtech | Software Engineer Intern",
      location: "Johannesburg & Remote, Gauteng",
      duration: "March 2024 - May 2024",
      description: `Front-end development, specializing in UI/UX design and development
                    for C# & ASP.NET Core API, MAUI applications.
                    Proficient in Azure DevOps tools, encompassing version control, CI/CD
                    pipelines, and release management.
                    Troubleshooting, debugging, maintaining and improving code base.`,
    },
    {
      image: "",
      company: "Curro Holdings | IT Systems Administrator",
      location: "Edenvale, Gauteng",
      duration: "August 2023 - Current",
      description: `Administrative support of Microsoft Azure, Active Directory,
                    Organizational Unit.
                    VMware Workstation - Cloud computing leveraging remote Server, PC
                    access, optimizing data and management.`,
    },
  ];

  return (
    <section className="experience-section" ref={refProp} >
      <h1>Work Experience</h1>
      {cardData.map((card, index) => (
        <ExperienceCard
          key={index}
          company={card.company}
          location={card.location}
          duration={card.duration}
          description={card.description}
          image={card.image}
        />
      ))}
    </section>
  );
}

export default Experience;
