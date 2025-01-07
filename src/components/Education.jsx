import React from 'react'

function Education() {


  const educationCardData = [
    {
      image: "",
      certName: "System Development Diploma",
      college: "Boston City Campus",
      date: "Feb. 2019 - Nov. 2024",
      description: ""
    },
    {
      image: "",
      certName: "Fullstack Software Engineer",
      college: "ALX Africa Bootcamp",
      date: "Aug. 2022 - Jan. 2024",
      description: ""
    },    
    {
      image: "",
      certName: "Create Web Applications with React.js",
      college: "OpenClassrooms",
      date: "Jan. 14, 2024",
      description: ""
    }, {
      image: "",
      certName: "Fullstack Node.js, Express.js, MongoDB",
      college: "OpenClassrooms",
      date: "Jan. 19, 2024",
      description: ""
    },
    {
      image: "",
      certName: "Python Programming",
      college: "OpenClassrooms",
      date: "Aug. 2023",
      description: ""
    }, 
    {
      image: "",
      certName: "Microsoft Certified Solutions",
      college: "Boston City Campus",
      date: "Jan. 2017 - Nov. 2024",
      description: ""
    },
    {
      image: "",
      certName: "CompTia A+",
      college: "Boston City Campus",
      date: "Jan. 2015 - Nov. 2015",
      description: ""
    }, {
      image: "",
      certName: "CompTia Networking+",
      college: "Boston City Campus",
      date: "Feb. 2019 - Nov. 2024",
      description: ""
    }
  ]


  const EducationCard = ({ image, certName, college, date, description }) => {
    return (
      <div>
        <div className="eduCard">
          {image && <img src={image} alt={certName} className="cardImage" />}
          <div className="cardContent">
            <h2 className="cardTitle">{certName}</h2>
            <h3 className="location">{college}</h3>
            <h4 className="duration">{date}</h4>
            <p className="cardDescription">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  //  This is the main function return below 
  return (
    <section className="education-section">
      <h1 className="educationTitle">Certifications</h1>
      {educationCardData.map((card, index) => (
        <EducationCard
          key={index}
          certName={card.certName}
          college={card.college}
          date={card.date}
          description={card.description}
        />
      ))}
    </section>
  )
}

export default Education